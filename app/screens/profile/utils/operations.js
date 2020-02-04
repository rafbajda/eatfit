import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { ActionSheet, Toast } from 'native-base';
import I18n from 'i18n-js';
import {
    getChangeAvatarOptions,
    CHANGE_AVATAR_BUTTON_INDEXES
} from '../../../shared/constants/actionSheets';
import globalHps from '../../../shared/utils/helpers';
import firebaseOps from './firebaseOperations';
import actions from '../state/actions';
import globalActions from '../../../shared/state/actions';
import hps from './helpers';

import { UserLanguageUpdateToast } from '../../../shared/constants/toasts';

const removeAvatar = dispatch => dispatch(actions.removeAvatar());

const getProfileFromAuthUser = authUser => {
    const { firstName, lastName, photoUrl, birthday } = {
        ...globalHps.normalizeKeysToCamelCase(authUser)
    };
    return { firstName, lastName, photoUrl, birthday };
};

const openImagePicker = async dispatch => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
        allowsEditing: true,
        aspect: [4, 3]
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
            quality: 1
        });

        if (!result.cancelled) {
            dispatch(actions.changeAvatarSuccess(result.uri));
        }
    }
};

const openChangeAvatarActions = async dispatch => {
    const { t } = I18n;
    ActionSheet.show(getChangeAvatarOptions(t), buttonIndex => {
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
};

const updateUserProfile = async (data, dispatch) => {
    const { profileData, profileFormValues } = { ...data };
    const dataToUpdate = {
        ...data.authUser,
        ...profileData,
        ...profileFormValues,
        birthday: new Date(profileFormValues.birthday)
    };
    if (dataToUpdate.photoUrl) {
        dataToUpdate.photoUrl = await firebaseOps
            .uploadAvatar(dataToUpdate.photoUrl, dataToUpdate.uid)
            .then(url => url)
            .catch(error => dispatch(actions.updateUserError(error)));
    }
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

const showUpdateLanguageSuccessToast = () => {
    const { t } = I18n;
    const toastMessage = t('toasts.languageUpdated');
    Toast.show(UserLanguageUpdateToast(toastMessage));
};

export default {
    getProfileFromAuthUser,
    openChangeAvatarActions,
    openImagePicker,
    updateUserProfile,
    showUpdateLanguageSuccessToast
};
