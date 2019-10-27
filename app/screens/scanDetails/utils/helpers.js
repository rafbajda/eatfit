import React from 'react';
import moment from 'moment';
import { ListItem } from 'react-native-elements';
import { lightGrey } from '../../../shared/constants/colors';
import globalHps from '../../../shared/utils/helpers';

const defaultSubstanceImage = require('../../../assets/images/default_substance.png');

const getSubstanceList = (substances, goToSubstanceDetails) =>
    substances.map(sub => {
        const source = sub.imageUrl
            ? { uri: sub.imageUrl }
            : defaultSubstanceImage;
        return (
            <ListItem
                containerStyle={{ borderWidth: 1, borderColor: lightGrey }}
                onPress={() => goToSubstanceDetails(sub)}
                key={sub.id}
                leftAvatar={{ source }}
                title={sub.name}
                chevron
            />
        );
    });

const getUserFriendlyDate = date =>
    moment(date).format('MMMM Do YYYY, h:mm:ss a');

const changeComaToBreak = str => str.split(', ').join(`\n`);

const getScanDate = date => {
    const scanProperDate = globalHps.getDateFromFirebaseTimestamp(date);
    const userFriendlyDate = getUserFriendlyDate(scanProperDate);
    return changeComaToBreak(userFriendlyDate);
};

export default {
    getSubstanceList,
    getScanDate
};
