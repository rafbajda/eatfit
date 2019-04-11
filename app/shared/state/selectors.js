import { createSelector } from 'reselect';

const firestoreRequestSelector = state => state.firestore.status.requesting.config;

const configLoadingSelector = state => state.config.isDataLoading;
const authLoadingSelector = state => state.auth.isLoading;

const isAuthLoadedSelector = state => state.firebase.auth.isLoaded;
const isAuthEmptySelector = state => state.firebase.auth.isEmpty;

const userSelector = state => state.auth.user;

const isNoUserLoggedInSelector = createSelector(
    isAuthLoadedSelector,
    isAuthEmptySelector,
    (isLoaded, isEmpty) => isLoaded && isEmpty
);

const loadingSelector = createSelector(
    configLoadingSelector,
    firestoreRequestSelector,
    (configLoading, firestoreRequest) => configLoading || firestoreRequest
);

export default {
    firestoreRequestSelector,
    configLoadingSelector,
    authLoadingSelector,
    isAuthLoadedSelector,
    isAuthEmptySelector,
    isNoUserLoggedInSelector,
    loadingSelector,
    userSelector,
};
