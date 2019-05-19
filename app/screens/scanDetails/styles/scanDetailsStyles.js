import styled from 'styled-components';
import { Content, Text } from 'native-base';

export const ImageContainer = styled(Content)`
    padding: 10%;
    ${'' /* padding-bottom: 0; */}
`;

export const ScanInformationContainer = styled(Content)`
    padding-top: 10%;
`;

export const ScanInformationLabel = styled(Text)`
    font-weight: 700;
    padding-top: 3%;
`;

export default {
    ImageContainer,
    ScanInformationContainer,
    ScanInformationLabel,
};
