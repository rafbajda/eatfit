/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Container } from 'native-base';
import { globalGreen } from '../../../shared/constants/Colors';

export const CenterContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const mailIconStyle = { color: globalGreen, fontSize: 200 };
