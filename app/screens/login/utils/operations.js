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

const dispatchCreateUserObjectOnCondition = (data, dispatch) => {
    if (!data.userObjectExists) {
        dispatch(globalActions.createUserObject(data));
    }
};
const dispatchCheckIfUserExists = (data, dispatch) => {
    dispatch(actions.checkUserObjectExistence(data));
};

const checkUserObjectExistence = async (data, dispatch) => {
    const { user } = { ...data };
    await firebaseOps
        .getUserById(user.uid)
        .then(doc => {
            if (doc.exists) {
                dispatch(
                    actions.checkUserObjectExistenceSuccess({ ...data, userObjectExists: true })
                );
            } else {
                dispatch(
                    actions.checkUserObjectExistenceSuccess({
                        ...data,
                        userObjectExists: false,
                    })
                );
            }
        })
        .catch(error => dispatch(actions.checkUserObjectExistenceError(error)));
};

export default {
    signInEmail,
    signInFacebook,
    signInGoogle,
    dispatchCreateUserObjectOnCondition,
    dispatchCheckIfUserExists,
    checkUserObjectExistence,
};
