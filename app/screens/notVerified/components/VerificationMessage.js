import React from 'react';
import { CenterContainer } from '../styles/notVerifiedStyles';
import {
    VerificationMainMessageText,
    VerificationInfoMessageText,
} from '../styles/verificationMessageStyles';

const VerificationMessage = props => {
    const { user } = { ...props };
    return (
        <CenterContainer>
            <VerificationMainMessageText style={{}}>
                Account is not verified!
            </VerificationMainMessageText>
            <VerificationInfoMessageText>
                Check {user && user.email ? user.email : 'email'} and click on verification link.
            </VerificationInfoMessageText>
        </CenterContainer>
    );
};

export default VerificationMessage;
