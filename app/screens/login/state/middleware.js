import { actionTypes } from './actions';
import ops from '../utils/operations';

const loginMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.LOGIN_EMAIL:
            ops.signInEmail(payload, dispatch);
            break;
        case actionTypes.LOGIN_FACEBOOK:
            ops.signInFacebook(dispatch);
            break;
        case actionTypes.LOGIN_GOOGLE:
            ops.signInGoogle(dispatch);
            break;
        case actionTypes.LOGIN_FACEBOOK_SUCCESS:
        case actionTypes.LOGIN_GOOGLE_SUCCESS:
            ops.createUserObject(payload, dispatch);
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default loginMiddleware;
