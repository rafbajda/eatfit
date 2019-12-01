const pickedLanguageSelector = state => state.config.pickedLanguage;

const keyboardOnScreenSelector = state => state.config.keyboardOnScreen;

const languagesSelector = state => {
    if (state.firestore.data.config) {
        return state.firestore.data.config.language.availableLanguages;
    }
    return state.firestore.data;
};

export default {
    keyboardOnScreenSelector,
    pickedLanguageSelector,
    languagesSelector,
};
