import React from 'react';
import hps from '../utils/helpers';
import {
    ScanInformationContainer,
    ScanInformationDescription,
    ScanInformationInfo,
    ScanInformationLabel,
    ScanRate,
    ScanRatingIcon
} from '../styles/scanDetailsStyles';
import I18n from 'i18n-js';

const ScanInformations = props => {
    const { score, t } = { ...props, ...I18n };
    const roundedScore = Math.round(score * 100) / 100;
    const emoji = hps.getEmoji(score);
    const color = hps.getColor(score);
    const description = hps.getDescription(score);
    return (
        <ScanInformationContainer>
            <ScanInformationLabel>{t('labels.rating')}</ScanInformationLabel>
            <ScanInformationInfo>
                <ScanRate color={color}>{roundedScore}</ScanRate>
                <ScanRatingIcon>{emoji}</ScanRatingIcon>
            </ScanInformationInfo>
            <ScanInformationDescription color={color}>
                {description}
            </ScanInformationDescription>
        </ScanInformationContainer>
    );
};

export default ScanInformations;
