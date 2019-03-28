/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Form, Text, Button } from 'native-base';
import { deepBlue } from '../../../shared/constants/Colors';

export const LoginFormContainer = styled(Form)`
    width: 80%;
`;

export const ForgotPasswordText = styled(Text)`
    font-size: 13;
    text-align: right;
    color: ${deepBlue};
    margin-top: 5;
    margin-bottom: 5;
`;

export const LoginButton = styled(Button)`
    background-color: ${deepBlue};
    width: 70%;
    justify-content: center;
    margin-top: 10;
    font-weight: bold;
`;
