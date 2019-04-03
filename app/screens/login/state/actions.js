/* eslint-disable import/prefer-default-export */
/* eslint-disable global-require */

export const SET_LANGUAGE = '[login] set language';
export const LOGIN_EMAIL = '[login] login email';
export const LOGIN_EMAIL_SUCCESS = '[login] login email success';
export const LOGIN_EMAIL_ERROR = '[login] login email error';

export const KEYBOARD_SHOW = '[login] show keyboard';
export const KEYBOARD_HIDE = '[login] hide keyboard';

export const keyboardShow = () => ({ type: KEYBOARD_SHOW });
export const keyboardHide = () => ({ type: KEYBOARD_HIDE });

export const loginEmailSuccess = payload => ({ type: LOGIN_EMAIL_SUCCESS, payload });
export const loginEmailError = payload => ({ type: LOGIN_EMAIL_ERROR, payload });

export const loginEmail = payload => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const { email, password } = { ...payload };
    dispatch({
        type: LOGIN_EMAIL,
        payload,
    });
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(loginEmailSuccess(user));
        })
        .catch(error => dispatch(loginEmailError(error)));
};

export const setLanguage = payload => ({
    type: SET_LANGUAGE,
    payload,
});
