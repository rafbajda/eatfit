/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Text } from 'native-base';
import { CenterRow } from '../../../shared/styles/common';
import { lightBlue, deepBlue } from '../../../shared/constants/colors';

// TODO: handle responsive margins
export const SignUpContainer = styled(CenterRow)`
    margin-top: 1%;
`;
export const InformationText = styled(Text)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${lightBlue};
`;

export const SignUpText = styled(Text)`
    color: ${deepBlue};
    font-weight: bold;
`;
