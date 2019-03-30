/* eslint-disable import/prefer-default-export */
/* eslint-disable global-require */

import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export const LOAD_CONFIG = '[login] load config';
export const LOAD_CONFIG_DONE = '[login] load config done';
export const GET_FONTS = '[login] get fonts';
export const GET_FONTS_SUCCESS = '[login] get fonts success';
export const GET_FONTS_ERROR = '[login] get fonts error';
export const SET_LANGUAGE = '[login] set language';
export const LOGIN_EMAIL = '[login] login email';
export const LOGIN_EMAIL_SUCCESS = '[login] login email success';
export const LOGIN_EMAIL_ERROR = '[login] login email error';

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

export const loadConfig = () => ({
    type: LOAD_CONFIG,
});

export const getFontsSuccess = () => ({
    type: GET_FONTS_SUCCESS,
});

export const getFontsError = error => ({
    type: GET_FONTS_ERROR,
    payload: error,
});

// TODO: get rid of these imports by adding font assets
export const getFonts = () => {
    return dispatch => {
        dispatch({
            type: GET_FONTS,
        });
        Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
            .then(() => dispatch(getFontsSuccess()))
            .catch(error => dispatch(getFontsError(error)));
    };
};

export const setLanguage = payload => ({
    type: SET_LANGUAGE,
    payload,
});

export const loadConfigDone = payload => ({
    type: LOAD_CONFIG_DONE,
    payload,
});
