import React from 'react';
import Divider from 'react-native-divider';
import { lightGrey } from '../../../shared/constants/colors';
import { NotVerifyDividerText } from '../styles/notVerifyDividerStyles';
import I18n from 'i18n-js';

const NotVerifyDivider = () => {
    const { t } = I18n;
    return (
        <Divider borderColor={lightGrey} orientation="center">
            <NotVerifyDividerText>{t('dividers.or')}</NotVerifyDividerText>
        </Divider>
    );
};

export default NotVerifyDivider;
