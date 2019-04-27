import React from 'react';
import { Icon } from 'react-native-elements';

const SIDE_BAR_LIST = [
    {
        id: 0,
        label: 'My Account',
        icon: <Icon name="account-circle" />,
    },
    {
        id: 1,
        label: 'Logout',
        icon: <Icon name="logout" type="material-community" />,
    },
];

export default {
    SIDE_BAR_LIST,
};
