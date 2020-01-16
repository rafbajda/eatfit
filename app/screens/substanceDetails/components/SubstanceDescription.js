import React from 'react';
import { Text } from 'native-base';
import {
    DescriptionContainer,
    SubstanceInformationLabel
} from '../styles/substanceDetailsStyles';

const SubstanceDescription = props => {
    const { substanceDescription } = { ...props };
    return (
        <DescriptionContainer>
            <SubstanceInformationLabel>Description:</SubstanceInformationLabel>
            <Text>{substanceDescription}</Text>
        </DescriptionContainer>
    );
};

export default SubstanceDescription;
