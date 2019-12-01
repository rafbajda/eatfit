import React from 'react';
import { Text } from 'native-base';
import {
    SubstanceInformationContainer,
    SubstanceInformationLabel,
} from '../styles/substanceDetailsStyles';
import {
    ScanInformationContainer,
    ScanInformationDescription,
    ScanInformationInfo,
    ScanRate,
    ScanRatingIcon
} from "../../scanDetails/styles/scanDetailsStyles";
import hps from "../../scanDetails/utils/helpers";

const SubstanceInformation = props => {
    const { substanceName, score } = props;
    const roundedScore = Math.round(score * 100) / 100;
    const emoji = hps.getEmoji(score);
    const color = hps.getColor(score);
    const description = hps.getDescription(score);
    return (
        <SubstanceInformationContainer>
            <SubstanceInformationLabel>Name:</SubstanceInformationLabel>
            <Text>{substanceName}</Text>
            <ScanInformationInfo>
                <ScanRate color={color}>{roundedScore}</ScanRate>
                <ScanRatingIcon>{emoji}</ScanRatingIcon>
            </ScanInformationInfo>
            <ScanInformationDescription color={color}>
                {description}
            </ScanInformationDescription>
        </SubstanceInformationContainer>
    );
};

export default SubstanceInformation;
