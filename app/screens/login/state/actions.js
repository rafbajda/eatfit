/* eslint-disable import/prefer-default-export */
/* eslint-disable global-require */

import firebaseOps from '../../../shared/utils/firebaseOperations';

export const SET_LANGUAGE = '[login] set language';
export const LOGIN_EMAIL = '[login] login email';
export const LOGIN_EMAIL_SUCCESS = '[login] login email success';
export const LOGIN_EMAIL_ERROR = '[login] login email error';
export const LOGOUT = '[login] logout';
export const LOGOUT_SUCCESS = '[login] logout success';
export const LOGOUT_ERROR = '[login] logout error';

export const KEYBOARD_SHOW = '[login] show keyboard';
export const KEYBOARD_HIDE = '[login] hide keyboard';

export const keyboardShow = () => ({ type: KEYBOARD_SHOW });
export const keyboardHide = () => ({ type: KEYBOARD_HIDE });

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const logoutError = payload => ({ type: LOGOUT_ERROR, payload });

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT,
    });
    firebaseOps
        .signOut(dispatch)
        .then(() => dispatch(logoutSuccess()))
        .catch(error => dispatch(logoutError(error)));
};

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
