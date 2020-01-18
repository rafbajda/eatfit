export const actionTypes = {
    SET_USER_LANGUAGE: '[profile] set user language',
    SET_USER_LANGUAGE_SUCCESS: '[profile] set user language success',
    SET_USER_LANGUAGE_ERROR: '[profile] set user language error',
    CHANGE_AVATAR: '[profile] change avatar',
    CHANGE_AVATAR_SUCCESS: '[profile] change avatar success',
    CHANGE_AVATAR_ERROR: '[profile] change avatar error',
    REMOVE_AVATAR: '[profile] remove avatar',
    UPDATE_USER: '[profile] update user',
    UPDATE_USER_SUCCESS: '[profile] update user success',
    UPDATE_USER_ERROR: '[profile] update user error'
};

const setUserLanguage = payload => ({
    type: actionTypes.SET_USER_LANGUAGE,
    payload
});
const setUserLanguageSuccess = payload => ({
    type: actionTypes.SET_USER_LANGUAGE_SUCCESS,
    payload
});
const setUserLanguageError = payload => ({
    type: actionTypes.SET_USER_LANGUAGE_ERROR,
    payload
});

const changeAvatar = () => ({ type: actionTypes.CHANGE_AVATAR });
const changeAvatarSuccess = payload => ({
    type: actionTypes.CHANGE_AVATAR_SUCCESS,
    payload
});
const changeAvatarError = payload => ({
    type: actionTypes.CHANGE_AVATAR_ERROR,
    payload
});

const removeAvatar = () => ({ type: actionTypes.REMOVE_AVATAR });

const updateUser = payload => ({ type: actionTypes.UPDATE_USER, payload });
const updateUserSuccess = () => ({ type: actionTypes.UPDATE_USER_SUCCESS });
const updateUserError = payload => ({
    type: actionTypes.UPDATE_USER_ERROR,
    payload
});

export default {
    changeAvatar,
    changeAvatarSuccess,
    changeAvatarError,
    removeAvatar,
    updateUser,
    updateUserSuccess,
    updateUserError,
    setUserLanguage,
    setUserLanguageSuccess,
    setUserLanguageError
};
