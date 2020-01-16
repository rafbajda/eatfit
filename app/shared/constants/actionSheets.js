import { globalGreen } from './colors';

const CHANGE_AVATAR_BUTTONS = [
    {
        text: 'Choose photo from gallery',
        icon: 'images',
        iconColor: globalGreen
    },
    { text: 'Take a photo', icon: 'camera', iconColor: globalGreen },
    { text: 'Delete Avatar', icon: 'trash', iconColor: globalGreen },
    { text: 'Cancel', icon: 'close', iconColor: globalGreen }
];

export const CHANGE_AVATAR_BUTTON_INDEXES = {
    IMAGE_LIBRARY: 0,
    CAMERA_PHOTO: 1,
    REMOVE_AVATAR: 2,
    CANCEL: 3
};

export const CHANGE_AVATAR_OPTIONS = {
    options: CHANGE_AVATAR_BUTTONS,
    cancelButtonIndex: CHANGE_AVATAR_BUTTON_INDEXES.CANCEL,
    destructiveButtonIndex: CHANGE_AVATAR_BUTTON_INDEXES.REMOVE_AVATAR,
    title: 'Change your avatar'
};

export default {
    CHANGE_AVATAR_OPTIONS
};
