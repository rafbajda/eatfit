import { globalGreen } from './colors';

const getChangeAvatarButtons = t => [
    {
        text: t('actionSheets.choosePhoto'),
        icon: 'images',
        iconColor: globalGreen
    },
    {
        text: t('actionSheets.takePhoto'),
        icon: 'camera',
        iconColor: globalGreen
    },
    {
        text: t('actionSheets.deleteAvatar'),
        icon: 'trash',
        iconColor: globalGreen
    },
    { text: t('actionSheets.cancel'), icon: 'close', iconColor: globalGreen }
];

export const CHANGE_AVATAR_BUTTON_INDEXES = {
    IMAGE_LIBRARY: 0,
    CAMERA_PHOTO: 1,
    REMOVE_AVATAR: 2,
    CANCEL: 3
};

export const getChangeAvatarOptions = t => ({
    options: getChangeAvatarButtons(t),
    cancelButtonIndex: CHANGE_AVATAR_BUTTON_INDEXES.CANCEL,
    destructiveButtonIndex: CHANGE_AVATAR_BUTTON_INDEXES.REMOVE_AVATAR,
    title: t('actionSheets.avatarTitle')
});
