/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Content } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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
