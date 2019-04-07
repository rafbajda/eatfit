import * as _ from 'lodash';

const normalizeKeysToCamelCase = obj => {
    return _.mapKeys(obj, (val, key) => _.camelCase(key));
};

export default {
    normalizeKeysToCamelCase,
};
