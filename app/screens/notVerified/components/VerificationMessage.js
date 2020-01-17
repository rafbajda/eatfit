import React from 'react';
import {
    VerificationMainMessageText,
    VerificationInfoMessageText
} from '../styles/verificationMessageStyles';
import { CenterContainer } from '../../../shared/styles/common';
import I18n from 'i18n-js';

const VerificationMessage = props => {
    const { user } = { ...props };
    const { t } = I18n;
    return (
        <CenterContainer>
            <VerificationMainMessageText>
                {t('info.accountIsNotVerified')}
            </VerificationMainMessageText>
            <VerificationInfoMessageText>
                {t('info.check')} {user && user.email ? user.email : 'email'}{' '}
                {t('info.andClickOnVerificationLink')}
            </VerificationInfoMessageText>
        </CenterContainer>
    );
};

export default VerificationMessage;
