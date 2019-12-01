import React from 'react';
import { Content } from 'native-base';
import hps from '../utils/helpers';

const SubstancesList = props => {
    const { substances, goToSubstanceDetails } = { ...props };
    const substanceList = hps.getSubstanceList(
        substances,
        goToSubstanceDetails
    );
    return <Content>{substanceList}</Content>;
};

export default SubstancesList;
