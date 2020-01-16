import React from 'react';
import Divider from 'react-native-divider';
import { DividerContainer, DividerText } from '../styles/loginDividerStyles';
import { lightGrey } from '../../../shared/constants/colors';
import I18n from 'i18n-js';

const LoginDivider = () => {
    const { t } = I18n;

    return (
        <DividerContainer>
            <Divider borderColor={lightGrey} orientation="center">
                <DividerText>{t('dividers.or')}</DividerText>
            </Divider>
        </DividerContainer>
    );
};

export default LoginDivider;
