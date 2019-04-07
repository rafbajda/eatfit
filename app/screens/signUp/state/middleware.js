import { CREATE_ACCOUNT_SUCCESS, createUserObject, CREATE_USER_OBJECT_SUCCESS } from './actions';
import { sendVerificationEmail } from '../../notVerified/state/actions';

const signUpMiddleware = store => next => action => {
    let isSocial;
    let loginProvider;
    if (store.getState().auth.user) {
        ({ isSocial, loginProvider } = store.getState().auth.user);
    }
    if (typeof action === 'object') {
        switch (action.type) {
            case CREATE_ACCOUNT_SUCCESS:
                store.dispatch(createUserObject(action.payload));
                break;
            case CREATE_USER_OBJECT_SUCCESS:
                if (!isSocial && loginProvider === 'email') {
                    store.dispatch(sendVerificationEmail());
                }
                break;
            default:
                return next(action);
        }
    }
    return next(action);
};

export default signUpMiddleware;
