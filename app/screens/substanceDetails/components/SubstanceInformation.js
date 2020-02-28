import React from 'react';
import { Text } from 'native-base';
import I18n from 'i18n-js';
import {
    SubstanceInformationContainer,
    SubstanceInformationLabel
} from '../styles/substanceDetailsStyles';
import {
    ScanInformationDescription,
    ScanInformationInfo,
    ScanRate,
    ScanRatingIcon
} from '../../scanDetails/styles/scanDetailsStyles';
import hps from '../../scanDetails/utils/helpers';

const SubstanceInformation = props => {
    const { substanceName, score, t } = { ...props, ...I18n };
    const roundedScore = Math.round(score * 100) / 100;
    const emoji = hps.getEmoji(score);
    const color = hps.getColor(score);
    const description = hps.getDescription(score, t);
    return (
        <SubstanceInformationContainer>
            <SubstanceInformationLabel>
                {t('labels.name')}
            </SubstanceInformationLabel>
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
