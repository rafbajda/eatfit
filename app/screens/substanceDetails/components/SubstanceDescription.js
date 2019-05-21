import React from 'react';
import { Text, Content } from 'native-base';
import { SubstanceInformationLabel } from '../styles/substanceDetailsStyles';

const SubstanceDescription = props => {
    const { substanceDescription } = { ...props };
    return (
        <Content>
            <SubstanceInformationLabel>Description:</SubstanceInformationLabel>
            <Text>{substanceDescription}</Text>
        </Content>
    );
};

export default SubstanceDescription;
