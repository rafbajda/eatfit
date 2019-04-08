import {
    LOGIN_FACEBOOK,
    loginFacebookError,
    loginFacebookSuccess,
    LOGIN_FACEBOOK_SUCCESS,
    LOGIN_GOOGLE_SUCCESS,
    LOGIN_GOOGLE,
    loginGoogleError,
    loginGoogleSuccess,
} from './actions';
import socialService from '../../../shared/modules/socialService';
import { createUserObject } from '../../signUp/state/actions';

const loginMiddleware = store => next => action => {
    if (typeof action === 'object') {
        switch (action.type) {
            case LOGIN_FACEBOOK:
                socialService
                    .loginWithFacebook()
                    .then(login => {
                        if (login && login.error) {
                            store.dispatch(loginFacebookError(login.error));
                        } else {
                            const { user, additionalUserInfo } = { ...login };
                            store.dispatch(
                                loginFacebookSuccess({
                                    user,
                                    additionalUserInfo,
                                })
                            );
                        }
                    })
                    .catch(error => store.dispatch(loginFacebookError(error)));
                break;
            case LOGIN_GOOGLE:
                socialService
                    .loginWithGoogle()
                    .then(login => {
                        if (login && login.error) {
                            store.dispatch(loginGoogleError(login.error));
                        } else {
                            console.log('l: ', login);
                            const { user, additionalUserInfo } = { ...login };
                            store.dispatch(
                                loginGoogleSuccess({
                                    user,
                                    additionalUserInfo,
                                })
                            );
                        }
                    })
                    .catch(error => store.dispatch(loginGoogleError(error)));
                break;
            case LOGIN_FACEBOOK_SUCCESS:
            case LOGIN_GOOGLE_SUCCESS:
                store.dispatch(createUserObject(action.payload));
                break;
            default:
                return next(action);
        }
    }
    return next(action);
};

export default loginMiddleware;
