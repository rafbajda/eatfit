import styled from 'styled-components';
import { Button, Text } from 'native-base';
import { globalGreen } from '../../../shared/constants/colors';
import { CenterRow } from '../../../shared/styles/common';
import { Content } from 'native-base';
export const indicatorSize = 35;

export const LoadingIndicator = styled(Content).attrs({
    contentContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})``;

export const LoadingIndicatorText = styled(Text)`
    font-size: 20;
    color: white;
    padding-left: 20;
`;

export const ButtonRow = styled(CenterRow)`
    height: 100;
`;

export const ScanButton = styled(Button)`
    height: 70;
    background-color: ${globalGreen};
    width: 70%;
    justify-content: center;
    margin-top: 30;
    font-weight: bold;
`;

export const ScanButtonText = styled(Text)`
    font-size: 30;
`;

export default {
    ScanButton,
    ScanButtonText,
    indicatorSize
};
