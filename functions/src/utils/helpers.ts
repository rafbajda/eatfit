import * as _ from 'lodash';
import { User, getUserInitialValue, UserInitialValues, createUserMap } from '../models/User';
import { Detection, Shot, SubstanceInfo } from '../models/Scans';

const normalizeKeysToCamelCase = obj => {
    return _.mapKeys(obj, (val, key) => _.camelCase(key));
};

const normalizeCamelCaseToSnakeCase = obj => {
    return _.mapKeys(obj, (val, key) => key.replace(/([A-Z])/g, '_$1').toLowerCase());
};

const completeUserInstance = (user: User) => {
    const map = createUserMap(user);

    return _.mapValues(UserInitialValues, (val, key: String) => {
        if (map.get(key) === null || map.get(key) === undefined) {
            return getUserInitialValue(key)
        }
        return map.get(key);
    })
}

const findSubstanceIds = (detections: Array<Detection>, shots: Array<Shot>): Array<String> => {
    const substanceIds = [];
    console.log('in find subs', shots, detections);
    _.map(shots, shot => {
        _.map(detections, det => {
            if (shot.phrase === det.description) substanceIds.push(shot.substanceId);
        })
    })
    return substanceIds;
}

const checkEmptyStrings = (user: User) =>
    _.mapValues(user, val => val === '' ? null : val)


export default {
    completeUserInstance,
    checkEmptyStrings,
    normalizeKeysToCamelCase,
    findSubstanceIds,
}