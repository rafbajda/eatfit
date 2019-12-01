export const actionTypes = {
    CHANGE_AVATAR: '[profile] change avatar',
    CHANGE_AVATAR_SUCCESS: '[profile] change avatar success',
    CHANGE_AVATAR_ERROR: '[profile] change avatar error',
    REMOVE_AVATAR: '[profile] remove avatar',
    UPDATE_USER: '[profile] update user',
    UPDATE_USER_SUCCESS: '[profile] update user success',
    UPDATE_USER_ERROR: '[profile] update user error',
};

const changeAvatar = () => ({ type: actionTypes.CHANGE_AVATAR });
const changeAvatarSuccess = payload => ({ type: actionTypes.CHANGE_AVATAR_SUCCESS, payload });
const changeAvatarError = payload => ({ type: actionTypes.CHANGE_AVATAR_ERROR, payload });

const removeAvatar = () => ({ type: actionTypes.REMOVE_AVATAR });

const updateUser = payload => ({ type: actionTypes.UPDATE_USER, payload });
const updateUserSuccess = () => ({ type: actionTypes.UPDATE_USER_SUCCESS });
const updateUserError = payload => ({ type: actionTypes.UPDATE_USER_ERROR, payload });

export default {
    changeAvatar,
    changeAvatarSuccess,
    changeAvatarError,
    removeAvatar,
    updateUser,
    updateUserSuccess,
    updateUserError,
};
