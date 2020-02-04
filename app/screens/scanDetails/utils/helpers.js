import React from 'react';
import moment from 'moment';
import { ListItem } from 'react-native-elements';
import {
    badImpactColor,
    goodImpactColor,
    lightGrey,
    neutralImpactColor,
    veryBadImpactColor,
    veryGoodImpactColor
} from '../../../shared/constants/colors';
import globalHps from '../../../shared/utils/helpers';

import emojis from '../../../shared/constants/emojis';
import {
    badImpactDescription,
    goodImpactDescription,
    neutralImpactDescription,
    veryBadImpactDescription,
    veryGoodImpactDescription
} from '../../../shared/constants/information';
import {isArray} from 'lodash';

const defaultSubstanceImage = require('../../../assets/images/default_substance.png');

const getSubstanceList = (substances, goToSubstanceDetails, locale) => isArray(substances) ?
    substances.map(sub => {
        const source = sub.imageUrl
            ? { uri: sub.imageUrl }
            : defaultSubstanceImage;

        console.log('locale: ', locale);
        const { name } = globalHps.getNameDescriptionByLocale(sub, locale);
        console.log('name: ', name);
        return (
            <ListItem
                containerStyle={{ borderWidth: 1, borderColor: lightGrey }}
                onPress={() => goToSubstanceDetails(sub)}
                key={sub.id}
                leftAvatar={{ source }}
                title={name}
                chevron
            />
        );
    }) : [];

const getUserFriendlyDate = date =>
    moment(date).format('MMMM Do YYYY, h:mm:ss a');

const changeComaToBreak = str => str.split(', ').join(`\n`);

const getScanDate = date => {
    const scanProperDate = globalHps.getDateFromFirebaseTimestamp(date);
    const userFriendlyDate = getUserFriendlyDate(scanProperDate);
    return changeComaToBreak(userFriendlyDate);
};

const getEmoji = score => {
    const {
        veryBadImpact,
        badImpact,
        neutralImpact,
        goodImpact,
        veryGoodImpact
    } = emojis;

    switch (true) {
        case score <= 2:
            return veryBadImpact;
        case score > 2 && score <= 4:
            return badImpact;
        case score > 4 && score <= 6:
            return neutralImpact;
        case score > 6 && score <= 8:
            return goodImpact;
        default:
            return veryGoodImpact;
    }
};

const getColor = score => {
    switch (true) {
        case score <= 2:
            return veryBadImpactColor;
        case score > 2 && score <= 4:
            return badImpactColor;
        case score > 4 && score <= 6:
            return neutralImpactColor;
        case score > 6 && score <= 8:
            return goodImpactColor;
        default:
            return veryGoodImpactColor;
    }
};

const getDescription = (score, t) => {
    switch (true) {
        case score <= 2:
            return t(veryBadImpactDescription);
        case score > 2 && score <= 4:
            return t(badImpactDescription);
        case score > 4 && score <= 6:
            return t(neutralImpactDescription);
        case score > 6 && score <= 8:
            return t(goodImpactDescription);
        default:
            return t(veryGoodImpactDescription);
    }
};

export default {
    getSubstanceList,
    getScanDate,
    getEmoji,
    getColor,
    getDescription
};
