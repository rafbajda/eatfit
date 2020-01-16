import actions, { actionTypes } from './actions';
import ops from '../utils/operations';
import signUpOperations from '../../screens/signUp/utils/operations';
import homeActions from '../../screens/home/state/actions';
import loginActions from '../../screens/login/state/actions';

const configMiddleware = store => next => action => {
    const { dispatch } = { ...store };
    switch (action.type) {
        case actionTypes.SET_UP_KEYBOARD_LISTENERS:
            ops.setUpKeyboardListeners(dispatch);
            break;
        case actionTypes.REMOVE_KEYBOARD_LISTENERS:
            ops.removeKeyboardListeners();
            break;
        case actionTypes.LOAD_CONFIG:
            dispatch(actions.getFonts());
            dispatch(actions.getCurrentLanguage());
            dispatch(actions.getAllSubstances());
            break;
        case actionTypes.GET_CURRENT_LANGUAGE:
            ops.getCurrentLanguage(dispatch);
            break;
        case actionTypes.GET_CURRENT_LANGUAGE_SUCCESS:
            dispatch(loginActions.setLanguage(action.payload));
            break;
        case actionTypes.GET_ALL_SUBSTANCES:
            ops.getAllSubstances(dispatch);
            break;
        case actionTypes.GET_FONTS:
            ops.getFonts(dispatch);
            break;
        case actionTypes.GET_FONTS_SUCCESS:
        case actionTypes.GET_FONTS_ERROR:
            dispatch(actions.loadConfigDone());
            break;
        case actionTypes.SET_USER:
            dispatch(homeActions.getAllScans(action.payload));
            break;
        default:
            return next(action);
    }
    return next(action);
};

const authMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.LOGOUT:
            ops.logout(dispatch);
            break;
        case actionTypes.CREATE_USER_OBJECT:
            ops.createUserObject(payload, dispatch);
            break;
        case actionTypes.CREATE_USER_OBJECT_SUCCESS:
            ops.refreshUser(payload, dispatch);
            signUpOperations.sendVerification(store);
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default {
    configMiddleware,
    authMiddleware
};
