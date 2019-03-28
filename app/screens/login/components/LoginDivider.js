import React from 'react';
import Divider from 'react-native-divider';
import { DividerContainer, DividerText } from '../styles/loginDividerStyles';
import { lightGrey } from '../../../shared/constants/Colors';

const LoginDivider = () => {
    return (
        <DividerContainer>
            <Divider borderColor={lightGrey} orientation="center">
                <DividerText>OR</DividerText>
            </Divider>
        </DividerContainer>
    );
};

export default LoginDivider;
