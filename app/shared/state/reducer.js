import initialState from '../constants/state';
import { LOAD_CONFIG, LOAD_CONFIG_DONE, LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from './actions';
import loginActionTypes from '../../screens/login/state/actions';
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
import forgotPasswordActions from '../../screens/forgotPassword/state/actions';

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
        case loginActionTypes.SET_LANGUAGE:
            return {
                ...state,
                pickedLanguage: action.payload,
            };
        case loginActionTypes.KEYBOARD_SHOW:
            return {
                ...state,
                keyboardOnScreen: true,
            };
        case loginActionTypes.KEYBOARD_HIDE:
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
        case loginActionTypes.LOGIN_EMAIL:
        case LOGOUT:
        case CREATE_ACCOUNT:
        case CHECK_VERIFICATION_STATUS:
        case forgotPasswordActions.SEND_RESET_PASSWORD_MAIL:
            return {
                ...state,
                isLoading: true,
            };
        case forgotPasswordActions.SEND_RESET_PASSWORD_MAIL_ERROR:
        case forgotPasswordActions.SEND_RESET_PASSWORD_MAIL_SUCCESS:
        case loginActionTypes.LOGIN_EMAIL_ERROR:
        case LOGOUT_ERROR:
        case CREATE_USER_OBJECT_SUCCESS:
        case CREATE_ACCOUNT_ERROR:
        case CREATE_USER_OBJECT_ERROR:
        case CHECK_VERIFICATION_STATUS_ERROR:
        case UPDATE_USER_VERIFICATION_SUCCESS:
        case UPDATE_USER_VERIFICATION_ERROR:
        case loginActionTypes.LOGIN_EMAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case loginActionTypes.SET_USER:
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
