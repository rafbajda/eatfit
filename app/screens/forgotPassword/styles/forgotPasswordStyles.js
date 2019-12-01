import { Text } from 'native-base';
import styled from 'styled-components';
import { deepGrey, mediumGrey } from '../../../shared/constants/colors';

export const RestPasswordMainMessageText = styled(Text)`
    font-size: 30;
    color: ${deepGrey};
`;

export const ResetPasswordInfoMessageText = styled(Text)`
    font-size: 15;
    color: ${mediumGrey};
`;
