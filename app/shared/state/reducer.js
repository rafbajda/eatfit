import initialState from '../constants/state';
import { LOAD_CONFIG, LOAD_CONFIG_DONE, LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from './actions';
import {
    SET_LANGUAGE,
    KEYBOARD_SHOW,
    KEYBOARD_HIDE,
    LOGIN_EMAIL,
    LOGIN_EMAIL_SUCCESS,
    LOGIN_EMAIL_ERROR,
    SET_USER,
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
import {
    SEND_RESET_PASSWORD_MAIL,
    SEND_RESET_PASSWORD_MAIL_ERROR,
    SEND_RESET_PASSWORD_MAIL_SUCCESS,
} from '../../screens/forgotPassword/state/actions';

import ops from '../utils/helpers';

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
        case LOGOUT:
        case CREATE_ACCOUNT:
        case CHECK_VERIFICATION_STATUS:
        case SEND_RESET_PASSWORD_MAIL:
            return {
                ...state,
                isLoading: true,
            };
        case SEND_RESET_PASSWORD_MAIL_ERROR:
        case SEND_RESET_PASSWORD_MAIL_SUCCESS:
        case LOGIN_EMAIL_ERROR:
        case LOGOUT_ERROR:
        case CREATE_USER_OBJECT_SUCCESS:
        case CREATE_ACCOUNT_ERROR:
        case CREATE_USER_OBJECT_ERROR:
        case CHECK_VERIFICATION_STATUS_ERROR:
        case UPDATE_USER_VERIFICATION_SUCCESS:
        case UPDATE_USER_VERIFICATION_ERROR:
        case LOGIN_EMAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case SET_USER:
            return {
                ...state,
                isLoading: false,
                user: ops.normalizeKeysToCamelCase(action.payload),
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: null,
            };
        default:
            return state;
    }
};

export default {
    configReducer,
    authReducer,
};
