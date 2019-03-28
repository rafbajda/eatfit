import React from 'react';
import { Thumbnail } from 'native-base';
import { CenterRow } from '../../../shared/styles/common';
import { iconStyle } from '../styles/loginIconStyles';

const logoImage = require('../../../assets/images/logo2.png');

const LoginIcon = () => {
    return (
        <CenterRow>
            <Thumbnail square source={logoImage} style={iconStyle} />
        </CenterRow>
    );
};

export default LoginIcon;
