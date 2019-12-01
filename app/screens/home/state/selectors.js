const scansLoadingSelector = state => state.scans.isLoading;

const scanStatusMessageSelector = state => state.scans.scanStatusMessage;

export default {
    scansLoadingSelector,
    scanStatusMessageSelector
};
