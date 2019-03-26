import { createSelector } from 'reselect';

/* eslint-disable import/prefer-default-export */
const configLoadingSelector = state => state.config.isDataLoading;
const firestoreRequestSelector = state => state.firestore.status.requesting.config;
export const languagesSelector = state => {
    if (state.firestore.data.config) {
        return state.firestore.data.config.language.availableLanguages;
    }
    return state.firestore.data;
};

export const loadingSelector = createSelector(
    configLoadingSelector,
    firestoreRequestSelector,
    (configLoading, firestoreRequest) => configLoading || firestoreRequest
);
