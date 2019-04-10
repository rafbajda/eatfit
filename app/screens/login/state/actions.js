export const actionTypes = {
    SET_LANGUAGE: '[login] set language',
    SET_USER: '[login] set user',
    LOGIN_EMAIL: '[login] login email',
    LOGIN_EMAIL_SUCCESS: '[login] login email success',
    LOGIN_EMAIL_ERROR: '[login] login email error',
    LOGIN_FACEBOOK: '[login] login facebook',
    LOGIN_FACEBOOK_SUCCESS: '[login] login facebook success',
    LOGIN_FACEBOOK_ERROR: '[login] login facebook error',
    LOGIN_GOOGLE: '[login] login google',
    LOGIN_GOOGLE_SUCCESS: '[login] login google success',
    LOGIN_GOOGLE_ERROR: '[login] login google error',
    KEYBOARD_SHOW: '[login] show keyboard',
    KEYBOARD_HIDE: '[login] hide keyboard',
};

const setUser = payload => ({ type: actionTypes.SET_USER, payload });
const setLanguage = payload => ({
    type: actionTypes.SET_LANGUAGE,
    payload,
});

const keyboardShow = () => ({ type: actionTypes.KEYBOARD_SHOW });
const keyboardHide = () => ({ type: actionTypes.KEYBOARD_HIDE });

const loginEmail = payload => ({
    type: actionTypes.LOGIN_EMAIL,
    payload,
});
const loginEmailSuccess = payload => ({ type: actionTypes.LOGIN_EMAIL_SUCCESS, payload });
const loginEmailError = payload => ({ type: actionTypes.LOGIN_EMAIL_ERROR, payload });

const loginFacebook = () => ({ type: actionTypes.LOGIN_FACEBOOK });
const loginFacebookSuccess = payload => ({ type: actionTypes.LOGIN_FACEBOOK_SUCCESS, payload });
const loginFacebookError = payload => ({ type: actionTypes.LOGIN_FACEBOOK_ERROR, payload });

const loginGoogle = () => ({ type: actionTypes.LOGIN_GOOGLE });
const loginGoogleSuccess = payload => ({ type: actionTypes.LOGIN_GOOGLE_SUCCESS, payload });
const loginGoogleError = payload => ({ type: actionTypes.LOGIN_GOOGLE_ERROR, payload });

export default {
    setUser,
    setLanguage,
    keyboardShow,
    keyboardHide,
    loginEmail,
    loginEmailSuccess,
    loginEmailError,
    loginFacebook,
    loginFacebookSuccess,
    loginFacebookError,
    loginGoogle,
    loginGoogleSuccess,
    loginGoogleError,
};
