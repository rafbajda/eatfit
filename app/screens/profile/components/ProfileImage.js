import React from 'react';
import { Avatar } from 'react-native-elements';
import { globalWhite } from '../../../shared/constants/colors';
import hps from '../../../shared/utils/helpers';

const defaultAvatar = require('../../../assets/images/default-avatar.png');

const ProfileImage = props => {
    const { changeAvatar, profile } = { ...props };
    const initials = hps.getInitialsFromUser(profile);
    return (
        <Avatar
            onEditPress={changeAvatar}
            containerStyle={{ marginTop: 20 }}
            title={initials}
            size={130}
            source={profile.photoUrl ? { uri: profile.photoUrl } : defaultAvatar}
            editButton={{
                name: 'edit',
                color: globalWhite,
            }}
            rounded
            showEditButton
        />
    );
};

export default ProfileImage;
