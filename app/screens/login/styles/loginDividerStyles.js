/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Content, Text } from 'native-base';
import { lightBlue } from '../../../shared/constants/Colors';

export const DividerContainer = styled(Content)`
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 10;
`;

export const DividerText = styled(Text)`
    color: ${lightBlue};
`;
