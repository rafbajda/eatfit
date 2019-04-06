import { createSelector } from 'reselect';

/* eslint-disable import/prefer-default-export */
export const configLoadingSelector = state => state.config.isDataLoading;
const firestoreRequestSelector = state => state.firestore.status.requesting.config;
export const authLoadingSelector = state => state.auth.isLoading;

export const isAuthLoadedSelector = state => state.firebase.auth.isLoaded;
export const isAuthEmptySelector = state => state.firebase.auth.isEmpty;

export const isNoUserLoggedInSelector = createSelector(
    isAuthLoadedSelector,
    isAuthEmptySelector,
    (isLoaded, isEmpty) => isLoaded && isEmpty
);

export const loadingSelector = createSelector(
    configLoadingSelector,
    firestoreRequestSelector,
    (configLoading, firestoreRequest) => configLoading || firestoreRequest
);
