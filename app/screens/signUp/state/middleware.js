/* eslint-disable no-case-declarations */
import {
    CREATE_ACCOUNT_SUCCESS,
    createUserObject,
    CREATE_USER_OBJECT_SUCCESS,
    CREATE_USER_OBJECT,
    createUserObjectSuccess,
    createUserObjectError,
    CREATE_ACCOUNT,
    createAccountSuccess,
    createAccountError,
} from './actions';
import { sendVerificationEmail } from '../../notVerified/state/actions';
import firebaseOps from '../../../shared/utils/firebaseOperations';

const signUpMiddleware = store => next => action => {
    let isSocial;
    let loginProvider;
    if (store.getState().auth.user) {
        ({ isSocial, loginProvider } = store.getState().auth.user);
    }
    if (typeof action === 'object') {
        switch (action.type) {
            case CREATE_USER_OBJECT:
                firebaseOps
                    .createUserInstance(action.payload)
                    .then(user => store.dispatch(createUserObjectSuccess(user)))
                    .catch(error => store.dispatch(createUserObjectError(error)));
                break;
            case CREATE_ACCOUNT:
                const { email, password, newsletter } = { ...action.payload };
                firebaseOps
                    .signUp(email, password)
                    .then(userInfo => {
                        store.dispatch(createAccountSuccess({ ...userInfo.user, newsletter }));
                    })
                    .catch(error => store.dispatch(createAccountError(error)));
                break;
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
