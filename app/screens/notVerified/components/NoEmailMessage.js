import React from 'react';
import I18n from 'i18n-js';
import { NoEmailText } from '../styles/noEmailMessageStyles';

const NoEmailMessage = () => {
    const { t } = I18n;
    return <NoEmailText>{t('info.didNotReceiveEmail')}</NoEmailText>;
};

export default NoEmailMessage;
