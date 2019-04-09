/* eslint-disable camelcase */
import { Font } from 'expo';
import {
    GET_FONTS_SUCCESS,
    GET_FONTS_ERROR,
    loadConfigDone,
    getFonts,
    LOAD_CONFIG,
    LOGOUT,
    logoutSuccess,
    logoutError,
    GET_FONTS,
    getFontsSuccess,
    getFontsError,
} from './actions';
import firebaseOps from '../utils/firebaseOperations';

const Roboto = require('../../assets/fonts/Roboto.ttf');
const Roboto_medium = require('../../assets/fonts/Roboto_medium.ttf');

const configMiddleware = store => next => action => {
    if (typeof action === 'object') {
        switch (action.type) {
            case LOAD_CONFIG:
                store.dispatch(getFonts());
                break;
            case GET_FONTS:
                Font.loadAsync({ Roboto, Roboto_medium })
                    .then(() => store.dispatch(getFontsSuccess()))
                    .catch(error => store.dispatch(getFontsError(error)));
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

const authMiddleware = store => next => action => {
    if (typeof action === 'object') {
        switch (action.type) {
            case LOGOUT:
                store.dispatch(getFonts());
                firebaseOps
                    .signOut()
                    .then(() => store.dispatch(logoutSuccess()))
                    .catch(error => store.dispatch(logoutError(error)));
                break;
            default:
                return next(action);
        }
    }
    return next(action);
};

export default {
    configMiddleware,
    authMiddleware,
};
