/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Content, Row, Form, Text, Button, Container } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { globalGreen } from '../constants/colors';

export const GlobalSpinnerContainer = styled(Content).attrs({
    contentContainerStyle: {
        justifyContent: 'center',
        flex: 1,
    },
})``;

export const GlobalContainer = styled(Content).attrs({
    contentContainerStyle: {
        paddingTop: getStatusBarHeight(),
    },
})``;

export const CenterRow = styled(Row)`
    justify-content: center;
`;

export const CenterFormContainer = styled(Form)`
    width: 80%;
`;

export const CenterFormContainerPaddingTop = styled(CenterFormContainer)`
    padding-top: 15;
`;

export const ErrorText = styled(Text)`
    font-size: 13;
    color: red;
`;

export const ErrorTextPaddingLeft = styled(ErrorText)`
    padding-left: 25;
`;

export const SubmitFormButton = styled(Button)`
    background-color: ${globalGreen};
    width: 70%;
    justify-content: center;
    margin-top: 10;
    font-weight: bold;
`;

export const CenterContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`;
