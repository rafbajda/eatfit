export const actionTypes = {
    MAKE_SCAN: '[home] make scan',
    MAKE_SCAN_SUCCESS: '[home] make scan success',
    MAKE_SCAN_ERROR: '[home] make scan error',
    CREATE_SCAN_OBJECT: '[home] create scan object',
    CREATE_SCAN_OBJECT_SUCCESS: '[home] create scan object success',
    CREATE_SCAN_OBJECT_ERROR: '[home] create scan object error',
    PERFORM_SCAN: '[home] perform scan',
    PERFORM_SCAN_SUCCESS: '[home] perform scan success',
    PERFORM_SCAN_ERROR: '[home] perform scan error',
    ANALYZE_SCAN: '[home] analyze scan',
    ANALYZE_SCAN_SUCCESS: '[home] analyze scan success',
    ANALYZE_SCAN_ERROR: '[home] analyze scan error',
    UPDATE_SCAN_STATUS_MESSAGE: '[home] update scan status message',
    GET_ALL_SCANS: '[home] get all scans',
    GET_ALL_SCANS_SUCCESS: '[home] get all scans success',
    GET_ALL_SCANS_ERROR: '[home] get all scans error'
};

const makeScan = payload => ({ type: actionTypes.MAKE_SCAN, payload });
const makeScanSuccess = payload => ({
    type: actionTypes.MAKE_SCAN_SUCCESS,
    payload
});
const makeScanError = payload => ({
    type: actionTypes.MAKE_SCAN_ERROR,
    payload
});

const createScanObject = payload => ({
    type: actionTypes.CREATE_SCAN_OBJECT,
    payload
});
const createScanObjectSuccess = payload => ({
    type: actionTypes.CREATE_SCAN_OBJECT_SUCCESS,
    payload
});
const createScanObjectError = payload => ({
    type: actionTypes.CREATE_SCAN_OBJECT_ERROR,
    payload
});

const performScan = payload => ({ type: actionTypes.PERFORM_SCAN, payload });
const performScanSuccess = payload => ({
    type: actionTypes.PERFORM_SCAN_SUCCESS,
    payload
});
const performScanError = payload => ({
    type: actionTypes.PERFORM_SCAN_ERROR,
    payload
});

const analyzeScan = payload => ({ type: actionTypes.ANALYZE_SCAN, payload });
const analyzeScanSuccess = payload => ({
    type: actionTypes.ANALYZE_SCAN_SUCCESS,
    payload
});
const analyzeScanError = payload => ({
    type: actionTypes.ANALYZE_SCAN_ERROR,
    payload
});

const updateScanStatusMessage = payload => ({
    type: actionTypes.UPDATE_SCAN_STATUS_MESSAGE,
    payload
});

const getAllScans = payload => ({ type: actionTypes.GET_ALL_SCANS, payload });
const getAllScansSuccess = payload => ({
    type: actionTypes.GET_ALL_SCANS_SUCCESS,
    payload
});
const getAllScansError = payload => ({
    type: actionTypes.GET_ALL_SCANS_ERROR,
    payload
});

export default {
    makeScan,
    makeScanSuccess,
    makeScanError,
    createScanObject,
    createScanObjectSuccess,
    createScanObjectError,
    performScan,
    performScanSuccess,
    performScanError,
    analyzeScan,
    analyzeScanSuccess,
    analyzeScanError,
    updateScanStatusMessage,
    getAllScans,
    getAllScansSuccess,
    getAllScansError
};
