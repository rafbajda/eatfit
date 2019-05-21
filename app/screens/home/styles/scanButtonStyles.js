import styled from 'styled-components';
import { Button, Text } from 'native-base';
import { globalGreen } from '../../../shared/constants/colors';

export const indicatorSize = 30;

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
    indicatorSize,
};
