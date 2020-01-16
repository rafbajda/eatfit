import * as _ from 'lodash';
import { User, getUserInitialValue, UserInitialValues, createUserMap } from '../models/User';
import {Detection, Score, Shot, SubstanceInfo} from '../models/Scans';
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
    _.mapValues(user, val => val === '' ? null : val);

const getWeight = (val: number) => {
    switch(true) {
        case val <= 2:
            return 3;
        case val > 2 && val <= 4:
            return 2;
        default:
            return 1;
    }
};

const getScore = (scoreValue: number): Score => {
    const weight = getWeight(scoreValue);
    return {
        value: scoreValue, weight
    }
}



const getFinalScore = (scores: Score[]): number => {
    console.log('SCORES: ', scores);
    const weightSum = scores.map(score => score.weight).reduce((acc,curr) => (acc + curr), 0);
    console.log('weightSum: ', weightSum);
    return scores.reduce((acc, curr) => (acc + curr.value * curr.weight), 0) / weightSum
}

const getScanScore = (substances: any[]): number => {
    const substanceScores = substances.map(substance => substance.score);
    const substanceScoreObjects = substanceScores.map(score => getScore(score));
    return getFinalScore(substanceScoreObjects);
}


export default {
    completeUserInstance,
    checkEmptyStrings,
    normalizeKeysToCamelCase,
    findSubstanceIds,
    getScanScore
}
