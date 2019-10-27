import React from 'react';
import { Thumbnail } from 'native-base';
import { CenterRow } from '../../../shared/styles/common';
import styles from '../styles/loginIconStyles';

const logoImage = require('../../../assets/images/eatfit_full.png');

const LoginIcon = props => {
    const { hidden, iconStyle } = { ...props, ...styles };
    if (hidden) {
        return null;
    }
    return (
        <CenterRow>
            <Thumbnail square source={logoImage} style={iconStyle} />
        </CenterRow>
    );
};

export default LoginIcon;
