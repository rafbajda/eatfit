import React from 'react';
import { Text } from 'native-base';
import {
    DescriptionContainer,
    SubstanceInformationLabel
} from '../styles/substanceDetailsStyles';
import I18n from 'i18n-js';

const SubstanceDescription = props => {
    const { substanceDescription, t } = { ...props, ...I18n };
    return (
        <DescriptionContainer>
            <SubstanceInformationLabel>
                {t('labels.description')}
            </SubstanceInformationLabel>
            <Text>{substanceDescription}</Text>
        </DescriptionContainer>
    );
};

export default SubstanceDescription;
