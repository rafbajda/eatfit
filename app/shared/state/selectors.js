import { createSelector } from 'reselect';

const firestoreRequestSelector = state =>
    state.firestore.status.requesting.config;

const languagesSelector = state => {
    if (state.firestore.data.config) {
        return state.firestore.data.config.language.availableLanguages;
    }
    return state.firestore.data;
};

const pickedLanguageSelector = state => state.config.pickedLanguage;
const configLoadingSelector = state => state.config.isDataLoading;
const authLoadingSelector = state => state.auth.isLoading;

const isAuthLoadedSelector = state => state.firebase.auth.isLoaded;
const isAuthEmptySelector = state => state.firebase.auth.isEmpty;

const userSelector = state => state.auth.user;

const keyboardOnScreenSelector = state => state.config.keyboardOnScreen;

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
    languagesSelector,
    pickedLanguageSelector,
    keyboardOnScreenSelector,
    userSelector
};
