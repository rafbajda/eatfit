import React from 'react';
import { Icon } from 'react-native-elements';

const SIDE_BAR_LIST = [
    {
        id: 0,
        label: 'My Account',
        icon: <Icon name="account-circle" />
    },
    {
        id: 1,
        label: 'All Substances',
        icon: <Icon name="list" />
    },
    {
        id: 2,
        label: 'Scans History',
        icon: <Icon name="history" type="material-community" />
    },
    {
        id: 3,
        label: 'Logout',
        icon: <Icon name="logout" type="material-community" />
    }
];

export default {
    SIDE_BAR_LIST
};
