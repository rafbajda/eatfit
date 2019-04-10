import { actionTypes } from './actions';
import ops from '../utils/operations';

const signUpMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.CREATE_USER_OBJECT:
            ops.createUserObject(payload, dispatch);
            break;
        case actionTypes.CREATE_ACCOUNT:
            ops.createAccount(payload, dispatch);
            break;
        case actionTypes.CREATE_ACCOUNT_SUCCESS:
            ops.dispatchCreateUserObject(payload, dispatch);
            break;
        case actionTypes.CREATE_USER_OBJECT_SUCCESS:
            ops.sendVerification(store);
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default signUpMiddleware;
