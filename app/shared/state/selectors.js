import { createSelector } from 'reselect';

/* eslint-disable import/prefer-default-export */
export const configLoadingSelector = state => state.config.isDataLoading;
const firestoreRequestSelector = state => state.firestore.status.requesting.config;
export const authLoadingSelector = state => state.auth.isLoading;

export const loadingSelector = createSelector(
    configLoadingSelector,
    firestoreRequestSelector,
    (configLoading, firestoreRequest) => configLoading || firestoreRequest
);
