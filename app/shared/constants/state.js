const initialState = {
    config: {
        isDataLoading: true,
        pickedLanguage: 'Pol', // TODO: make setting default language based on GPS
        keyboardOnScreen: false,
    },
    auth: {
        user: null,
        isLoading: false,
    },
};

export default initialState;
