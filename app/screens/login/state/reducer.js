import initialState from '../../../shared/constants/State';
import { LOAD_CONFIG, LOAD_CONFIG_DONE, SET_LANGUAGE } from './actions';

const loginReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export default loginReducer;
