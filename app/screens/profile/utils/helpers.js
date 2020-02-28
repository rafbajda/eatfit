import * as _ from 'lodash';

const normalizeCamelCaseToSnakeCase = obj => {
    return _.mapKeys(obj, (val, key) =>
        key.replace(/([A-Z])/g, '_$1').toLowerCase()
    );
};

const getInitialsFromUser = user => {
    const firstLetter = user && user.firstName ? user.firstName[0] : '';
    const secondLetter = user && user.lastName ? user.lastName[0] : '';
    return (firstLetter + secondLetter).toUpperCase();
};

export default {
    normalizeCamelCaseToSnakeCase,
    getInitialsFromUser
};
