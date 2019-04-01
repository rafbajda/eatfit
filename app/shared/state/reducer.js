import initialState from '../constants/State';
import { LOAD_CONFIG, LOAD_CONFIG_DONE } from './actions';
import { SET_LANGUAGE, KEYBOARD_SHOW, KEYBOARD_HIDE } from '../../screens/login/state/actions';

const initialConfigState = initialState.config;

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

export default {
    configReducer,
};
