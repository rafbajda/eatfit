import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGIN_EMAIL,
    LOGOUT,
    LOGOUT_ERROR,
    LOGIN_EMAIL_ERROR,
    LOGIN_EMAIL_SUCCESS,
} from './actions';
import initialState from '../../../shared/constants/State';

const initialAuthState = initialState.auth;

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case LOGIN_EMAIL:
            return {
                ...state,
                isLoading: true,
            };
        case LOGOUT:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_EMAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            };
        case LOGIN_EMAIL_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: null,
            };
        case LOGOUT_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default authReducer;
