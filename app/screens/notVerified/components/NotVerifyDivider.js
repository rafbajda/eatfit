import React from 'react';
import Divider from 'react-native-divider';
import { lightGrey } from '../../../shared/constants/colors';
import { NotVerifyDividerText } from '../styles/notVerifyDividerStyles';

const NotVerifyDivider = () => {
    return (
        <Divider borderColor={lightGrey} orientation="center">
            <NotVerifyDividerText>OR</NotVerifyDividerText>
        </Divider>
    );
};

export default NotVerifyDivider;
