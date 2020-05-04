import {url} from '../helpers/constants'
import {Dispatch} from "redux";

export const autoLogin = () => (dispatch: Dispatch) => {
    const token = localStorage.getItem('token');

    if (token) {
        dispatch({type: 'LOGIN_SUCCESS', data: token})
    }
};

export const authorizeUser = (obj: Object, page: string) => (dispatch: Dispatch) => {
    sendAuthData(obj, page)
        .then(json => {
            if (json.message404) {
                dispatch({type: 'ERROR_404', data: json.message404})
            } else {
                dispatch(canAuth());
                localStorage.setItem('token', JSON.stringify(`Bearer ${json.token}`))
            }
            
        })
        .catch(error => {
            dispatch(errorAuth());
            console.log('Error writing token ', error)
        });

};

const canAuth = () => {
    return {type: 'AUTH'}
};

export const clearError = () => {
    return {type: 'CLEAR_ERROR'}
};

const errorAuth = () => {
    return {type: 'ERROR_AUTH'}
};

export const registeredUser = (obj: Object, page: string) => (dispatch: Dispatch) => {
    sendAuthData(obj, page)
        .then((json) => {
            if (json.message409) {
                dispatch({type: 'ERROR_409', data: json.message409});
            } else {
                dispatch({type: 'REGISTER', data: json});
                console.log(json);
            }
        })
        .catch((error) => {
            dispatch(errorAuth());
             console.log(error);
        })
};

export const sendAuthData = (obj: any, page: string) => {
        return fetch(`${url.server}/api/auth/${page}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email: obj.email,
                password: obj.password
            })
        })
            .then(result => {
                return result.json();
            })
            .catch(error => {
                console.log(error);
            });
};
