/* eslint-disable import/prefer-default-export */
export const actionTypes = {
    LOAD_CONFIG: '[login] load config',
    LOAD_CONFIG_DONE: '[login] load config done',
    GET_FONTS_ASYNC: '[login] getting fonts',
    GET_FONTS_SUCCESS: '[login] fonts successfully loaded',
    GET_AVAILABLE_LANGUAGES: '[login] getting languages',
    GET_AVAILABLE_LANGUAGES_SUCCESS: '[login] languages successfully loaded',
    GET_AVAILABLE_LANGUAGES_FAILURE: '[login] failed to load languages',
};

export const loadConfig = () => ({
    type: actionTypes.LOAD_CONFIG,
});

export const getFontsAsync = () => ({
    type: actionTypes.GET_FONTS_ASYNC,
});

export const getFontsSuccess = () => ({
    type: actionTypes.GET_AVAILABLE_LANGUAGES_SUCCESS,
});

export const getAvailableLanguages = () => ({
    type: actionTypes.GET_AVAILABLE_LANGUAGES,
});

export const getAvailableLanguagesSuccess = payload => ({
    type: actionTypes.GET_AVAILABLE_LANGUAGES_SUCCESS,
    payload,
});
// TODO: need to handle some error screen,
export const getAvailableLanguagesFailure = payload => ({
    type: actionTypes.GET_AVAILABLE_LANGUAGES_FAILURE,
    payload,
});

export const loadConfigDone = payload => ({
    type: actionTypes.LOAD_CONFIG_DONE,
    payload,
});
