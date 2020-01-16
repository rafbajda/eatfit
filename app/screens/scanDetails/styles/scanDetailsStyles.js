import styled from 'styled-components';
import { Content, Text } from 'native-base';
import { deepGrey } from '../../../shared/constants/colors';

export const ImageContainer = styled(Content)`
    padding: 10%;
    ${'' /* padding-bottom: 0; */}
`;

export const ScanInformationContainer = styled(Content).attrs({
    contentContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%'
    }
})``;

export const ScanInformationLabel = styled(Text)`
    font-weight: 700;
    color: ${deepGrey};
    padding-top: 3%;
    padding-bottom: 3%;
`;

export const ScanInformationInfo = styled(Content).attrs({
    contentContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})``;

export const ScanRatingIcon = styled(Text)`
    font-size: 45;
    padding: 1%;
    padding-left: 3%;
`;

export const ScanRate = styled(Text)`
    font-size: 45;
    font-weight: bold;
    color: ${props => props.color};
    padding: 1%;
`;

export const ScanInformationDescription = styled(Text)`
    font-size: 20;
    font-weight: bold;
    color: ${props => props.color};
    padding: 1%;
`;

export default {
    ImageContainer,
    ScanInformationContainer,
    ScanInformationLabel
};
