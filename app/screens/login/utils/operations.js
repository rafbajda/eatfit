import { Keyboard } from 'react-native';
import actions from '../state/actions';
import firebaseOps from './firebaseOperations';
import globalFirebaseOps from '../../../shared/utils/firebaseOperations';
import socialService from '../../../shared/modules/socialService';
import I18n from 'i18n-js';

let keyboardDidShowListener = null;
let keyboardDidHideListener = null;

const updateLocalLanguage = newLocale => (I18n.locale = newLocale);

const setUpKeyboardListeners = dispatch => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
        dispatch(actions.keyboardShow())
    );
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
        dispatch(actions.keyboardHide())
    );
};

const removeKeyboardListeners = () => {
    keyboardDidShowListener.remove();
    keyboardDidHideListener.remove();
};

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
                console.log('error from resolved', login);
                dispatch(actions.loginFacebookError(login.error));
            } else {
                console.log('login: ', login);
                const { user, additionalUserInfo } = { ...login };
                dispatch(
                    actions.loginFacebookSuccess({
                        user,
                        additionalUserInfo
                    })
                );
            }
        })
        .catch(error => {
            console.log('error from this catch: ', error);
            dispatch(actions.loginFacebookError(error));
        });
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
                        additionalUserInfo
                    })
                );
            }
        })
        .catch(error => dispatch(actions.loginGoogleError(error)));
};

const checkUserObjectExistence = async (data, dispatch) => {
    const { user } = { ...data };
    await globalFirebaseOps
        .getUserById(user.uid)
        .then(doc => {
            if (doc.exists) {
                dispatch(
                    actions.checkUserObjectExistenceSuccess({
                        ...data,
                        userObjectExists: true
                    })
                );
            } else {
                dispatch(
                    actions.checkUserObjectExistenceSuccess({
                        ...data,
                        userObjectExists: false
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
    checkUserObjectExistence,
    setUpKeyboardListeners,
    removeKeyboardListeners,
    updateLocalLanguage
};
