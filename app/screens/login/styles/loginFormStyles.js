import styled from 'styled-components';
import { Text, Button } from 'native-base';
import { deepBlue, globalGreen } from '../../../shared/constants/colors';

export const ForgotPasswordText = styled(Text)`
    font-size: 13;
    text-align: right;
    color: ${deepBlue};
    margin-bottom: 5;
`;

export const LoginButton = styled(Button)`
    background-color: ${globalGreen};
    height: 60;
    width: 70%;
    justify-content: center;
    margin-top: 25;
    margin-bottom: 15;
    font-weight: bold;
`;

const additionalTopPadding = {
    paddingTop: 15
};

export default {
    additionalTopPadding,
    LoginButton,
    ForgotPasswordText
};
