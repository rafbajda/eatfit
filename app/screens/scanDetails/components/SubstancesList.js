import React from 'react';
import { Content } from 'native-base';
import hps from '../utils/helpers';
import * as Localization from 'expo-localization';

const SubstancesList = props => {
    const { substances, goToSubstanceDetails, locale } = {
        ...props,
        ...Localization
    };
    const substanceList = hps.getSubstanceList(
        substances,
        goToSubstanceDetails,
        locale
    );

    return <Content>{substanceList}</Content>;
};

export default SubstancesList;
