import styled from 'styled-components';
import { Content, Text } from 'native-base';

export const ImageContainer = styled(Content)`
    padding: 10%;
`;

export const ScanInformationContainer = styled(Content)`
    padding-top: 10%;
`;

export const DateCreationLabel = styled(Text)`
    font-weight: 700;
`;

export default {
    ImageContainer,
    ScanInformationContainer,
    DateCreationLabel,
};
