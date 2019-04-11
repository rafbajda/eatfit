import { actionTypes } from './actions';
import ops from '../utils/operations';
import signUpOperations from '../../screens/signUp/utils/operations';

const configMiddleware = store => next => action => {
    const { dispatch } = { ...store };
    switch (action.type) {
        case actionTypes.LOAD_CONFIG:
            ops.dispatchGetFonts(dispatch);
            break;
        case actionTypes.GET_FONTS:
            ops.getFonts(dispatch);
            break;
        case actionTypes.GET_FONTS_SUCCESS:
        case actionTypes.GET_FONTS_ERROR:
            ops.dispatchDoneConfig(dispatch);
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
            signUpOperations.sendVerification(store);
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default {
    configMiddleware,
    authMiddleware,
};
