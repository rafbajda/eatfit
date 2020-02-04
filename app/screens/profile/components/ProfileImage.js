import React from 'react';
import { Avatar } from 'react-native-elements';
import { globalWhite } from '../../../shared/constants/colors';
import hps from '../utils/helpers';
import { avatarContainerStyle, avatarSize } from '../styles/profileImageStyles';

const defaultAvatar = require('../../../assets/images/default_avatar.png');

const ProfileImage = props => {
    const { changeAvatar, profile } = { ...props };
    const initials = hps.getInitialsFromUser(profile);
    return (
        <Avatar
            onEditPress={changeAvatar}
            containerStyle={avatarContainerStyle}
            title={initials}
            size={avatarSize}
            source={
                profile && profile.photoUrl ? { uri: profile.photoUrl } : defaultAvatar
            }
            editButton={{
                name: 'edit',
                color: globalWhite
            }}
            rounded
            showEditButton
        />
    );
};

export default ProfileImage;
