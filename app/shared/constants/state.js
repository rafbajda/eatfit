const initialState = {
    config: {
        isDataLoading: true,
        pickedLanguage: 'Pol', // TODO: make setting default language based on GPS
        keyboardOnScreen: false
    },
    auth: {
        user: null,
        isLoading: false
    },
    profile: {
        photoUrl: null,
        firstName: null,
        lastName: null,
        birthday: null
    },
    scans: {
        isLoading: false,
        scanStatusMessage: '',
        latestScan: null,
        allScans: null
    },
    substances: {
        latestSubstance: null,
        allSubstances: null
    }
};

export default initialState;
