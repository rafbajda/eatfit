import initialState from '../constants/state';
import { actionTypes as globalActionTypes } from './actions';
import { actionTypes as loginActionTypes } from '../../screens/login/state/actions';
import signUpActions from '../../screens/signUp/state/actions';
import { actionTypes as verificationActionTypes } from '../../screens/notVerified/state/actions';
import forgotPasswordActions from '../../screens/forgotPassword/state/actions';

import ops from '../utils/helpers';

const initialConfigState = initialState.config;
const initialAuthState = initialState.auth;

const configReducer = (state = initialConfigState, action) => {
    switch (action.type) {
        case globalActionTypes.LOAD_CONFIG:
            return {
                ...state,
                isDataLoading: true,
            };
        case globalActionTypes.LOAD_CONFIG_DONE:
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
        case globalActionTypes.LOGOUT:
        case signUpActions.CREATE_ACCOUNT:
        case verificationActionTypes.CHECK_VERIFICATION_STATUS:
        case forgotPasswordActions.SEND_RESET_PASSWORD_MAIL:
            return {
                ...state,
                isLoading: true,
            };
        case forgotPasswordActions.SEND_RESET_PASSWORD_MAIL_ERROR:
        case forgotPasswordActions.SEND_RESET_PASSWORD_MAIL_SUCCESS:
        case loginActionTypes.LOGIN_EMAIL_ERROR:
        case globalActionTypes.LOGOUT_ERROR:
        case signUpActions.CREATE_USER_OBJECT_SUCCESS:
        case signUpActions.CREATE_ACCOUNT_ERROR:
        case signUpActions.CREATE_USER_OBJECT_ERROR:
        case verificationActionTypes.CHECK_VERIFICATION_STATUS_ERROR:
        case verificationActionTypes.UPDATE_USER_VERIFICATION_SUCCESS:
        case verificationActionTypes.UPDATE_USER_VERIFICATION_ERROR:
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

        case globalActionTypes.LOGOUT_SUCCESS:
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
