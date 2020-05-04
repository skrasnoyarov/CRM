const initialState = {
	categories: [],
	loading: false,
	categoryById: {}
};

export const PagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_NEW_CATEGORY':
			return {
				...state,
				categories: [
					...state.categories,
					action.data
				]
			}
		case 'CHANGE_CATEGORY': {
			const category = action.data;
			const categories = updateCategories(category, state.categories)

			return {
				...state,
				categories
			}
		}
		case 'GET_ALL_CATEGORIES':
			return {
				...state,
				categories: action.data
			};
		case 'GET_CURRENT_CATEGORY':
			return {
				...state,
				categoryById: action.data
			}
		case 'LOADING':
			return {
				...state,
				loading: true
			}
		default:
			return state
	}

};

const updateCategories = (category, values) => {
	return values.map(item => {
		if (item._id === category._id) {
			return category;
		}

		return item;
	});
}