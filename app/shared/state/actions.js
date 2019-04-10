export const actionTypes = {
    LOAD_CONFIG: '[config] load config',
    LOAD_CONFIG_DONE: '[config] load config done',
    GET_FONTS: '[config] get fonts',
    GET_FONTS_SUCCESS: '[config] get fonts success',
    GET_FONTS_ERROR: '[config] get fonts error',
    LOGOUT: '[auth] logout',
    LOGOUT_SUCCESS: '[auth] logout success',
    LOGOUT_ERROR: '[auth] logout error',
};

const logout = () => ({
    type: actionTypes.LOGOUT,
});
const logoutSuccess = () => ({ type: actionTypes.LOGOUT_SUCCESS });
const logoutError = payload => ({ type: actionTypes.LOGOUT_ERROR, payload });

const loadConfig = () => ({
    type: actionTypes.LOAD_CONFIG,
});

const getFontsSuccess = () => ({
    type: actionTypes.GET_FONTS_SUCCESS,
});

const getFontsError = error => ({
    type: actionTypes.GET_FONTS_ERROR,
    payload: error,
});

const getFonts = () => ({
    type: actionTypes.GET_FONTS,
});

const loadConfigDone = payload => ({
    type: actionTypes.LOAD_CONFIG_DONE,
    payload,
});

export default {
    logout,
    logoutSuccess,
    logoutError,
    loadConfig,
    getFontsSuccess,
    getFontsError,
    getFonts,
    loadConfigDone,
};
