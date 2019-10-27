import React from 'react';
import {
    VerificationMainMessageText,
    VerificationInfoMessageText
} from '../styles/verificationMessageStyles';
import { CenterContainer } from '../../../shared/styles/common';

const VerificationMessage = props => {
    const { user } = { ...props };
    return (
        <CenterContainer>
            <VerificationMainMessageText>
                Account is not verified!
            </VerificationMainMessageText>
            <VerificationInfoMessageText>
                Check {user && user.email ? user.email : 'email'} and click on
                verification link.
            </VerificationInfoMessageText>
        </CenterContainer>
    );
};

export default VerificationMessage;
