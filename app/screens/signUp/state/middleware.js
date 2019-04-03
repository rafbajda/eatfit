import { CREATE_ACCOUNT_SUCCESS, createUserObject, CREATE_USER_OBJECT_SUCCESS } from './actions';
import { sendVerificationEmail } from '../../notVerified/state/actions';

const signUpMiddleware = store => next => action => {
    if (typeof action === 'object') {
        switch (action.type) {
            case CREATE_ACCOUNT_SUCCESS:
                store.dispatch(createUserObject(action.payload));
                break;
            case CREATE_USER_OBJECT_SUCCESS:
                store.dispatch(sendVerificationEmail());
                break;
            default:
                return next(action);
        }
    }
    return next(action);
};

export default signUpMiddleware;
