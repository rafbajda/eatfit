import * as _ from 'lodash';
import { User, getUserInitialValue, UserInitialValues, createUserMap } from '../models/User';
import { Detection, Shot, SubstanceInfo } from '../models/Scans';
const StringSimilarity = require('string-similarity');

const normalizeKeysToCamelCase = obj =>
    _.mapKeys(obj, (val, key) => _.camelCase(key));


const normalizeCamelCaseToSnakeCase = obj =>
    _.mapKeys(obj, (val, key) => key.replace(/([A-Z])/g, '_$1').toLowerCase());


const completeUserInstance = (user: User) => {
    const map = createUserMap(user);

    return _.mapValues(UserInitialValues, (val, key: String) => {
        if (map.get(key) === null || map.get(key) === undefined) {
            return getUserInitialValue(key)
        }
        return map.get(key);
    })
}

const findSubstanceIds = (detections: Array<String>, shots: Array<Shot>): Array<String> => {
    const substanceIds = [];
    const lowerDetections = detections.map(det => det.toLowerCase());
    _.map(shots, shot => { shot.phrase = shot.phrase.toLowerCase() });
    _.map(shots, shot => {
        _.map(lowerDetections, det => {
            const SimilarityLevel = StringSimilarity.compareTwoStrings(shot.phrase, det);
            if (SimilarityLevel >= 0.9) substanceIds.push(shot.substanceId);
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