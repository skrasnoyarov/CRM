import {url} from "../helpers/constants";
import {Dispatch} from "redux";

const loading = (dispatch: Dispatch) => {
	return dispatch({type: 'LOADING'})
};

const getAllCategories = (data: Object, dispatch: Dispatch) => {
	return	dispatch({type: 'GET_ALL_CATEGORIES', data})
};

const getAllCategoriesData = () => (dispatch: Dispatch) => {
	const token = localStorage.getItem('token');

	return fetch(`${url.server}/api/category`, getFetchOptions(getFetchHeaders(token || '')))
		.then(response => {
			if (response.status === 200) {
				return response.json()
			} else {
				throw new Error('Категории не получены')
			}
		})
		.then(result => {
			dispatch(loading(dispatch));
			dispatch(getAllCategories(result, dispatch))
		})
		.catch(error => {
			console.log(error)
		});
};

const changeCategoryById = (data: any, id: string) => (dispatch: Dispatch) => {
	const token = localStorage.getItem('token');
	const formData = new FormData();

	if (data.image.file) {
		formData.append('image', data.image.file, data.image.file.name);
	}
	formData.append('name', data.name);

	return fetch(`${url.server}/api/category/${id}`, {
		headers : {
			'Content-Type': '',
			...getFetchHeaders(token || '')
		},
		method: 'PATCH',
		body: formData
	})
		.then(response => {
			if (response.status === 200) {
				return response.json()
			} else {
				throw new Error('Категория не изменена')
			}
		})
		.then(result => {
			dispatch({type: 'CHANGE_CATEGORY', data: result})
		})
		.catch(error => {
			console.log(error)
		});
};

const getCategoryById = (id: string) => (dispatch: Dispatch) => {
	const token = localStorage.getItem('token');

	return fetch(`${url.server}/api/category/${id}`, getFetchOptions(getFetchHeaders(token || '')))
		.then(response => {
			if (response.status === 200) {
				return response.json()
			} else {
				throw new Error('Произошла ошибка при получении текущей категории')
			}
		})
		.then(result => {
			dispatch({type: 'GET_CURRENT_CATEGORY', data: result})
		})
		.catch(error => {
			throw new Error(error)
		});
};

const createNewCategory = (data: any) => (dispatch: Dispatch) => {
	const token = localStorage.getItem('token');

	return fetch(`${url.server}/api/category`, {
		headers : {
			'Content-Type': 'application/json;charset=utf-8',
			...getFetchHeaders(token || '')
		},
		method: 'POST',
		body: JSON.stringify({
			imageSrc: data.image,
			name: data.name
		})
	})
		.then(response => {
			return response.json()
		})
		.catch(error => {
			throw new Error(error)
		})
		.then(result => {
			dispatch({type: 'CREATE_NEW_CATEGORY', data: result})
		})
		.catch(error => {
			console.log(error);
		})
};

const getFetchOptions = (headers: any) => ({
	headers,
	method: 'GET'
});

const getFetchHeaders = (token: string) => ({
	Authorization: JSON.parse(token)
});

export {
	changeCategoryById,
	createNewCategory,
	getAllCategoriesData,
	getCategoryById
}
