
const initialState = {
  canAuth: true,
  email: '',
  isRegistered: false,
  errorMessage: '',
  password: '',
  token: ''
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH':
            return {
                ...state,
                canAuth: false,
                errorMessage: ''
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.data
            };
        case 'REGISTER':
            const {email, password} = action.data;

            return {
                ...state,
                isRegistered: !!email && !!password,
                errorMessage: ''
            };
        case 'CLEAR_ERROR':
            return {
                ...state,
                errorMessage: ''
            };
        case 'ERROR_AUTH':
            return {
                ...state,
                canAuth: true,
                errorMessage: 'Что то пошло не так'
            };
        case 'ERROR_404':
        case 'ERROR_409':
            return {
                ...state,
                errorMessage: action.data
            };
        default:
            return state;
    }
};