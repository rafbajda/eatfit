import styled from 'styled-components';
import { Content, Text } from 'native-base';
// TODO: these styles are really similar to scanDetailsStyles, in near future move them to shared styles
export const ImageContainer = styled(Content)`
    padding: 10%;
`;

export const DescriptionContainer = styled(Content)`
    padding: 10%;
`;

export const SubstanceInformationContainer = styled(Content).attrs({
    contentContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%'
    }
})``;

export const SubstanceInformationLabel = styled(Text)`
    font-weight: 700;
    padding-top: 3%;
`;

export default {
    ImageContainer,
    SubstanceInformationLabel,
    SubstanceInformationContainer
};
