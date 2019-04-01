/* eslint-disable import/prefer-default-export */

export const pickedLanguageSelector = state => state.config.pickedLanguage;
export const keyboardOnScreenSelector = state => state.config.keyboardOnScreen;
export const userSelector = state => state.user;
export const authLoadingSelector = state => state.auth.isLoading;

export const languagesSelector = state => {
    if (state.firestore.data.config) {
        return state.firestore.data.config.language.availableLanguages;
    }
    return state.firestore.data;
};
