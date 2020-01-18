export const actionTypes = {
    SET_USER: '[login] set user',
    SET_LANGUAGE: '[login] set language',
    LOAD_CONFIG: '[config] load config',
    LOAD_CONFIG_DONE: '[config] load config done',
    GET_FONTS: '[config] get fonts',
    GET_FONTS_SUCCESS: '[config] get fonts success',
    GET_FONTS_ERROR: '[config] get fonts error',
    LOGOUT: '[auth] logout',
    LOGOUT_SUCCESS: '[auth] logout success',
    LOGOUT_ERROR: '[auth] logout error',
    CREATE_USER_OBJECT: '[sign up] create user object',
    CREATE_USER_OBJECT_SUCCESS: '[sign up] create user object success',
    CREATE_USER_OBJECT_ERROR: '[sign up] create user object error',
    GET_ALL_SUBSTANCES: '[config] get all substances',
    GET_ALL_SUBSTANCES_SUCCESS: '[config] get all substances success',
    GET_ALL_SUBSTANCES_ERROR: '[config] get all substances error',
    GET_CURRENT_LANGUAGE: '[config] get current language',
    GET_CURRENT_LANGUAGE_SUCCESS: '[config] get current language success',
    GET_CURRENT_LANGUAGE_ERROR: '[config] get current language error',
    KEYBOARD_SHOW: '[config] show keyboard',
    KEYBOARD_HIDE: '[config] hide keyboard',
    SET_UP_KEYBOARD_LISTENERS: '[config] set up keyboard listeners',
    REMOVE_KEYBOARD_LISTENERS: '[config] remove keyboard listeners'
};

const setLanguage = payload => ({
    type: actionTypes.SET_LANGUAGE,
    payload
});

const setUpKeyboardListeners = () => ({
    type: actionTypes.SET_UP_KEYBOARD_LISTENERS
});
const removeKeyboardListeners = () => ({
    type: actionTypes.REMOVE_KEYBOARD_LISTENERS
});
const keyboardShow = () => ({ type: actionTypes.KEYBOARD_SHOW });
const keyboardHide = () => ({ type: actionTypes.KEYBOARD_HIDE });

const setUser = payload => ({ type: actionTypes.SET_USER, payload });

const createUserObject = payload => ({
    type: actionTypes.CREATE_USER_OBJECT,
    payload
});
const createUserObjectSuccess = payload => ({
    type: actionTypes.CREATE_USER_OBJECT_SUCCESS,
    payload
});
const createUserObjectError = payload => ({
    type: actionTypes.CREATE_USER_OBJECT_ERROR,
    payload
});

const logout = () => ({
    type: actionTypes.LOGOUT
});
const logoutSuccess = () => ({ type: actionTypes.LOGOUT_SUCCESS });
const logoutError = payload => ({ type: actionTypes.LOGOUT_ERROR, payload });

const loadConfig = () => ({
    type: actionTypes.LOAD_CONFIG
});

const getFontsSuccess = () => ({
    type: actionTypes.GET_FONTS_SUCCESS
});

const getFontsError = error => ({
    type: actionTypes.GET_FONTS_ERROR,
    payload: error
});

const getFonts = () => ({
    type: actionTypes.GET_FONTS
});

const loadConfigDone = payload => ({
    type: actionTypes.LOAD_CONFIG_DONE,
    payload
});

const getAllSubstancesSuccess = payload => ({
    type: actionTypes.GET_ALL_SUBSTANCES_SUCCESS,
    payload
});

const getAllSubstancesError = payload => ({
    type: actionTypes.GET_ALL_SUBSTANCES_ERROR,
    payload
});

const getAllSubstances = () => ({
    type: actionTypes.GET_ALL_SUBSTANCES
});

const getCurrentLanguageSuccess = payload => ({
    type: actionTypes.GET_CURRENT_LANGUAGE_SUCCESS,
    payload
});

const getCurrentLanguageError = payload => ({
    type: actionTypes.GET_CURRENT_LANGUAGE_ERROR,
    payload
});

const getCurrentLanguage = () => ({
    type: actionTypes.GET_CURRENT_LANGUAGE
});

export default {
    setLanguage,
    setUser,
    logout,
    logoutSuccess,
    logoutError,
    loadConfig,
    getFontsSuccess,
    getFontsError,
    getFonts,
    loadConfigDone,
    createUserObject,
    createUserObjectSuccess,
    createUserObjectError,
    getAllSubstances,
    getAllSubstancesSuccess,
    getAllSubstancesError,
    getCurrentLanguage,
    getCurrentLanguageSuccess,
    getCurrentLanguageError,
    keyboardShow,
    keyboardHide,
    setUpKeyboardListeners,
    removeKeyboardListeners
};
