import React from 'react';
import { Content } from 'native-base';
import {
    RestPasswordMainMessageText,
    ResetPasswordInfoMessageText,
} from '../styles/forgotPasswordStyles';

const ResetPasswordMessage = () => {
    return (
        <Content>
            <RestPasswordMainMessageText>Reset your password</RestPasswordMainMessageText>
            <ResetPasswordInfoMessageText>
                You will receive link that will allow you to reset your password.
            </ResetPasswordInfoMessageText>
        </Content>
    );
};

export default ResetPasswordMessage;
