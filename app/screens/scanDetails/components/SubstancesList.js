import React from 'react';
import { Content } from 'native-base';
import * as Localization from 'expo-localization';
import hps from '../utils/helpers';

const SubstancesList = props => {
    const { substances, goToSubstanceDetails, locale } = {
        ...props,
        ...Localization
    };
    const substanceList = hps.getSubstanceList(substances, goToSubstanceDetails, locale);

    return <Content>{substanceList}</Content>;
};

export default SubstancesList;
