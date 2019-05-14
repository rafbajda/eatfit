import * as _ from 'lodash';

export interface Detection {
    locations?: Array<any>,
    properties?: Array<any>,
    mid?: String,
    locale?: String,
    description: String,
    score?: Number,
    confidence?: Number,
    topicality?: Number,
    boundingPoly?: any,
}

export interface Shot {
    id: String,
    phrase: String,
    substanceId: String,
}

export interface SubstanceInfo {
    id: String,
    name: String,
    description: String,
}

export const SubstanceInfoInitialValues: SubstanceInfo = {
    id: null,
    name: null,
    description: null,
}

export const ShotInitialValues: Shot = {
    id: null,
    phrase: null,
    substanceId: null,
}

export const DetectionInitialValues: Detection = {
    locations: [],
    properties: [],
    mid: null,
    locale: null,
    description: null,
    score: null,
    confidence: null,
    topicality: null,
    boundingPoly: null,
}
