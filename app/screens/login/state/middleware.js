import actions, { actionTypes } from './actions';
import globalActions from '../../../shared/state/actions';
import ops from '../utils/operations';

const loginMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.SET_UP_KEYBOARD_LISTENERS:
            ops.setUpKeyboardListeners(dispatch);
            break;
        case actionTypes.REMOVE_KEYBOARD_LISTENERS:
            ops.removeKeyboardListeners();
            break;
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
            dispatch(actions.checkUserObjectExistence(payload));
            break;
        case actionTypes.CHECK_USER_OBJECT_EXISTENCE:
            ops.checkUserObjectExistence(payload, dispatch);
            break;
        case actionTypes.CHECK_USER_OBJECT_EXISTENCE_SUCCESS:
            dispatch(globalActions.createUserObject(payload));
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default loginMiddleware;
