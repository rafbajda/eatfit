const pickedLanguageSelector = state => state.config.pickedLanguage;

const languagesSelector = state => {
    if (state.firestore.data.config) {
        return state.firestore.data.config.language.availableLanguages;
    }
    return state.firestore.data;
};

export default {
    pickedLanguageSelector,
    languagesSelector
};
