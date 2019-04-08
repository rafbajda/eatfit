/* eslint-disable import/prefer-default-export */
/* eslint-disable global-require */

export const SET_LANGUAGE = '[login] set language';
export const SET_USER = '[login] set user';

export const LOGIN_EMAIL = '[login] login email';
export const LOGIN_EMAIL_SUCCESS = '[login] login email success';
export const LOGIN_EMAIL_ERROR = '[login] login email error';

export const LOGIN_FACEBOOK = '[login] login facebook';
export const LOGIN_FACEBOOK_SUCCESS = '[login] login facebook success';
export const LOGIN_FACEBOOK_ERROR = '[login] login facebook error';

export const LOGIN_GOOGLE = '[login] login google';
export const LOGIN_GOOGLE_SUCCESS = '[login] login google success';
export const LOGIN_GOOGLE_ERROR = '[login] login google error';

export const KEYBOARD_SHOW = '[login] show keyboard';
export const KEYBOARD_HIDE = '[login] hide keyboard';

export const setUser = payload => ({ type: SET_USER, payload });

export const keyboardShow = () => ({ type: KEYBOARD_SHOW });
export const keyboardHide = () => ({ type: KEYBOARD_HIDE });

export const loginEmailSuccess = payload => ({ type: LOGIN_EMAIL_SUCCESS, payload });
export const loginEmailError = payload => ({ type: LOGIN_EMAIL_ERROR, payload });

export const loginEmail = payload => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const { email, password, newsletter } = { ...payload };
    dispatch({
        type: LOGIN_EMAIL,
        payload,
    });
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(loginEmailSuccess({ ...user, newsletter }));
        })
        .catch(error => dispatch(loginEmailError(error)));
};

export const loginFacebook = () => ({ type: LOGIN_FACEBOOK });
export const loginFacebookSuccess = payload => ({ type: LOGIN_FACEBOOK_SUCCESS, payload });
export const loginFacebookError = payload => ({ type: LOGIN_FACEBOOK_ERROR, payload });

export const loginGoogle = () => ({ type: LOGIN_GOOGLE });
export const loginGoogleSuccess = payload => ({ type: LOGIN_GOOGLE_SUCCESS, payload });
export const loginGoogleError = payload => ({ type: LOGIN_GOOGLE_ERROR, payload });

export const setLanguage = payload => ({
    type: SET_LANGUAGE,
    payload,
});
