import { Text, Content } from 'native-base';
import styled from 'styled-components';
import { deepGrey, mediumGrey } from '../../../shared/constants/colors';

export const RestPasswordMainMessageText = styled(Text)`
    font-size: 30;
    margin-bottom: 10;
    color: ${deepGrey};
`;

export const ResetPasswordInfoMessageText = styled(Text)`
    font-size: 15;
    color: ${mediumGrey};
`;

export const ResetPasswordMessageContainer = styled(Content).attrs({
    contentContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 25
    }
})``;

export const iconStyle = { height: 180, width: 180, marginBottom: 25 };
