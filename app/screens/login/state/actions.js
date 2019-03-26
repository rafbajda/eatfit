/* eslint-disable import/prefer-default-export */
/* eslint-disable global-require */

import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export const LOAD_CONFIG = '[login] load config';
export const LOAD_CONFIG_DONE = '[login] load config done';
export const GET_FONTS = '[login] get fonts';
export const GET_FONTS_SUCCESS = '[login] get fonts success';
export const GET_FONTS_ERROR = '[login] get fonts error';

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

export const loadConfigDone = payload => ({
    type: LOAD_CONFIG_DONE,
    payload,
});
