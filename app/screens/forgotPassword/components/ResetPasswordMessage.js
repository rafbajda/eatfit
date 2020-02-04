import React from 'react';
import { Thumbnail } from 'native-base';
import I18n from 'i18n-js';
import {
    RestPasswordMainMessageText,
    ResetPasswordInfoMessageText,
    iconStyle,
    ResetPasswordMessageContainer
} from '../styles/forgotPasswordStyles';

const logoImage = require('../../../assets/images/reset_password.jpeg');

const ResetPasswordMessage = () => {
    const { t } = I18n;
    return (
        <ResetPasswordMessageContainer>
            <Thumbnail square source={logoImage} style={iconStyle} />

            <RestPasswordMainMessageText>{t('info.resetPassword')}</RestPasswordMainMessageText>
            <ResetPasswordInfoMessageText>
                {t('info.resetPasswordDetails')}
            </ResetPasswordInfoMessageText>
        </ResetPasswordMessageContainer>
    );
};

export default ResetPasswordMessage;
