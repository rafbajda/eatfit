/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Row, Button } from 'native-base';
import { globalGreen } from '../../../shared/constants/colors';

export const RefreshRow = styled(Row)`
    flex-direction: row;
    justify-content: center;
    height: auto;
`;

export const RefreshButton = styled(Button)`
    background-color: ${globalGreen};
    font-weight: bold;
    height: 70;
    width: 300;
    justify-content: center;
`;

export const RefreshButtonTextStyle = { fontSize: 17 };
