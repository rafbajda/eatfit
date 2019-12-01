import { Text } from 'native-base';
import styled from 'styled-components';
import { deepGrey, mediumGrey } from '../../../shared/constants/colors';

export const VerificationMainMessageText = styled(Text)`
    font-size: 30;
    color: ${deepGrey};
`;

export const VerificationInfoMessageText = styled(Text)`
    font-size: 15;
    color: ${mediumGrey};
`;

export default {
    VerificationMainMessageText,
    VerificationInfoMessageText,
};
