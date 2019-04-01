/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Text, Button } from 'native-base';
import { deepBlue } from '../../../shared/constants/Colors';

export const ForgotPasswordText = styled(Text)`
    font-size: 13;
    text-align: right;
    color: ${deepBlue};
    margin-bottom: 5;
`;

export const LoginButton = styled(Button)`
    background-color: ${deepBlue};
    width: 70%;
    justify-content: center;
    margin-top: 10;
    font-weight: bold;
`;

export const additionalTopPadding = {
    paddingTop: 15,
};
