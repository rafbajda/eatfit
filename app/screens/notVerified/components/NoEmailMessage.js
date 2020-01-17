import React from 'react';
import { NoEmailText } from '../styles/noEmailMessageStyles';
import I18n from 'i18n-js';

const NoEmailMessage = () => {
    const { t } = I18n;
    return <NoEmailText>{t('info.didNotReceiveEmail')}</NoEmailText>;
};

export default NoEmailMessage;
