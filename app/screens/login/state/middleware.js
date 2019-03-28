import {
    LOAD_CONFIG,
    GET_FONTS_SUCCESS,
    GET_FONTS_ERROR,
    getFonts,
    loadConfigDone,
} from './actions';

const configMiddleware = store => next => action => {
    console.log(action);
    if (typeof action === 'object') {
        switch (action.type) {
            case LOAD_CONFIG:
                store.dispatch(getFonts());
                break;
            case GET_FONTS_SUCCESS:
            case GET_FONTS_ERROR:
                store.dispatch(loadConfigDone());
                break;
            default:
                return next(action);
        }
    }
    return next(action);
};

export default configMiddleware;
