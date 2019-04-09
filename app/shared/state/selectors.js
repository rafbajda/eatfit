/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const firestoreRequestSelector = state => state.firestore.status.requesting.config;

export const configLoadingSelector = state => state.config.isDataLoading;
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
