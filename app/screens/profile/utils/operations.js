import { ImagePicker, Permissions } from 'expo';
import { ActionSheet } from 'native-base';
import {
    CHANGE_AVATAR_OPTIONS,
    CHANGE_AVATAR_BUTTON_INDEXES,
} from '../../../shared/constants/actionSheets';
import hps from '../../../shared/utils/helpers';
import firebaseOps from '../../../shared/utils/firebaseOperations';
import actions from '../state/actions';
import globalActions from '../../../shared/state/actions';

const removeAvatar = dispatch => dispatch(actions.removeAvatar());

const getProfileFromAuthUser = authUser => {
    const { firstName, lastName, photoUrl, birthday } = {
        ...hps.normalizeKeysToCamelCase(authUser),
    };
    return { firstName, lastName, photoUrl, birthday };
};

const openImagePicker = async dispatch => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
        allowsEditing: true,
        aspect: [4, 3],
    });

    if (!result.cancelled) {
        dispatch(actions.changeAvatarSuccess(result.uri));
    }
};

const openCamera = async dispatch => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    if (status === 'granted') {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            dispatch(actions.changeAvatarSuccess(result.uri));
        }
    }
};

const openChangeAvatarActions = async dispatch =>
    ActionSheet.show(CHANGE_AVATAR_OPTIONS, buttonIndex => {
        switch (buttonIndex) {
            case CHANGE_AVATAR_BUTTON_INDEXES.IMAGE_LIBRARY:
                openImagePicker(dispatch);
                break;
            case CHANGE_AVATAR_BUTTON_INDEXES.CAMERA_PHOTO:
                openCamera(dispatch);
                break;
            case CHANGE_AVATAR_BUTTON_INDEXES.REMOVE_AVATAR:
                removeAvatar(dispatch);
                break;
            default:
                break;
        }
    });

const updateUserProfile = (data, dispatch) => {
    const { profileData, profileFormValues } = { ...data };
    const dataToUpdate = {
        ...data.authUser,
        ...profileData,
        ...profileFormValues,
        birthday: new Date(profileFormValues.birthday),
    };
    const normalizedData = hps.normalizeCamelCaseToSnakeCase(dataToUpdate);
    firebaseOps
        .updateUser(data.authUser.uid, normalizedData)
        .then(async () => {
            const updateUserSuccess = () => dispatch(actions.updateUserSuccess());
            const setUser = user => dispatch(globalActions.setUser(user));
            await firebaseOps.reloadUser(data.authUser.uid, setUser, updateUserSuccess);
        })
        .catch(error => dispatch(actions.updateUserError(error)));
};

export default {
    getProfileFromAuthUser,
    openChangeAvatarActions,
    openImagePicker,
    updateUserProfile,
};
