import actions from '../state/actions';
import globalActions from '../../../shared/state/actions';
import firebaseOps from '../../../shared/utils/firebaseOperations';
import socialService from '../../../shared/modules/socialService';

const signInEmail = (data, dispatch) => {
    const { email, password, newsletter } = { ...data };
    firebaseOps
        .signInEmail(email, password)
        .then(user => {
            dispatch(actions.loginEmailSuccess({ ...user, newsletter }));
        })
        .catch(error => dispatch(actions.loginEmailError(error)));
};
const signInFacebook = dispatch => {
    socialService
        .loginWithFacebook()
        .then(login => {
            if (login && login.error) {
                dispatch(actions.loginFacebookError(login.error));
            } else {
                const { user, additionalUserInfo } = { ...login };
                dispatch(
                    actions.loginFacebookSuccess({
                        user,
                        additionalUserInfo,
                    })
                );
            }
        })
        .catch(error => dispatch(actions.loginFacebookError(error)));
};

const signInGoogle = dispatch => {
    socialService
        .loginWithGoogle()
        .then(login => {
            if (login && login.error) {
                dispatch(actions.loginGoogleError(login.error));
            } else {
                const { user, additionalUserInfo } = { ...login };
                dispatch(
                    actions.loginGoogleSuccess({
                        user,
                        additionalUserInfo,
                    })
                );
            }
        })
        .catch(error => dispatch(actions.loginGoogleError(error)));
};

const dispatchCreateUserObject = (data, dispatch) => dispatch(globalActions.createUserObject(data));

export default {
    signInEmail,
    signInFacebook,
    signInGoogle,
    dispatchCreateUserObject,
};
