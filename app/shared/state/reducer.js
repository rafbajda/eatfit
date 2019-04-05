import initialState from '../constants/state';
import { LOAD_CONFIG, LOAD_CONFIG_DONE, LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from './actions';
import {
    SET_LANGUAGE,
    KEYBOARD_SHOW,
    KEYBOARD_HIDE,
    LOGIN_EMAIL,
    LOGIN_EMAIL_SUCCESS,
    LOGIN_EMAIL_ERROR,
} from '../../screens/login/state/actions';
import {
    CREATE_ACCOUNT,
    CREATE_USER_OBJECT_SUCCESS,
    CREATE_ACCOUNT_ERROR,
    CREATE_USER_OBJECT_ERROR,
} from '../../screens/signUp/state/actions';
import {
    UPDATE_USER_VERIFICATION_SUCCESS,
    UPDATE_USER_VERIFICATION_ERROR,
    CHECK_VERIFICATION_STATUS_ERROR,
    CHECK_VERIFICATION_STATUS,
} from '../../screens/notVerified/state/actions';

const initialConfigState = initialState.config;
const initialAuthState = initialState.auth;

const configReducer = (state = initialConfigState, action) => {
    switch (action.type) {
        case LOAD_CONFIG:
            return {
                ...state,
                isDataLoading: true,
            };
        case LOAD_CONFIG_DONE:
            return {
                ...state,
                isDataLoading: false,
            };
        case SET_LANGUAGE:
            return {
                ...state,
                pickedLanguage: action.payload,
            };
        case KEYBOARD_SHOW:
            return {
                ...state,
                keyboardOnScreen: true,
            };
        case KEYBOARD_HIDE:
            return {
                ...state,
                keyboardOnScreen: false,
            };
        default:
            return state;
    }
};

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
        case CREATE_ACCOUNT:
            return {
                ...state,
                isLoading: true,
            };
        case CREATE_USER_OBJECT_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case CREATE_ACCOUNT_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case CREATE_USER_OBJECT_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case CHECK_VERIFICATION_STATUS:
            return {
                ...state,
                isLoading: true,
            };
        case CHECK_VERIFICATION_STATUS_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case UPDATE_USER_VERIFICATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case UPDATE_USER_VERIFICATION_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default {
    configReducer,
    authReducer,
};
