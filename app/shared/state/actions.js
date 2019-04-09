export const LOAD_CONFIG = '[config] load config';
export const LOAD_CONFIG_DONE = '[config] load config done';

export const GET_FONTS = '[config] get fonts';
export const GET_FONTS_SUCCESS = '[config] get fonts success';
export const GET_FONTS_ERROR = '[config] get fonts error';

export const LOGOUT = '[auth] logout';
export const LOGOUT_SUCCESS = '[auth] logout success';
export const LOGOUT_ERROR = '[auth] logout error';

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const logoutError = payload => ({ type: LOGOUT_ERROR, payload });

export const logout = () => ({
    type: LOGOUT,
});

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

export const getFonts = () => ({
    type: GET_FONTS,
});

export const loadConfigDone = payload => ({
    type: LOAD_CONFIG_DONE,
    payload,
});
