import initialState from '../../../shared/constants/State';
import { actionTypes } from './actions';

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_CONFIG:
            return {
                ...state,
                config: {
                    ...state.config,
                    isDataLoading: true,
                },
            };
        case actionTypes.GET_AVAILABLE_LANGUAGES_SUCCESS:
            return {
                ...state,
                config: {
                    ...state.config,
                    languages: action.payload,
                },
            };
        case actionTypes.LOAD_CONFIG_DONE:
            return {
                ...state,
                config: {
                    ...state.config,
                    isDataLoading: false,
                },
            };
        default:
            return state;
    }
};
