import React from 'react';
import { Text } from 'native-base';
import {
    SubstanceInformationContainer,
    SubstanceInformationLabel,
} from '../styles/substanceDetailsStyles';

const SubstanceInformation = props => {
    const { substanceName } = { ...props };
    return (
        <SubstanceInformationContainer>
            <SubstanceInformationLabel>Name:</SubstanceInformationLabel>
            <Text>{substanceName}</Text>
        </SubstanceInformationContainer>
    );
};

export default SubstanceInformation;
