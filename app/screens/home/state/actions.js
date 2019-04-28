export const actionTypes = {
    MAKE_SCAN: '[home] make scan',
    MAKE_SCAN_SUCCESS: '[home] make scan success',
    MAKE_SCAN_ERROR: '[home] make scan error',
    PERFORM_SCAN: '[home] perform scan',
    PERFORM_SCAN_SUCCESS: '[home] perform scan success',
    PERFORM_SCAN_ERROR: '[home] perform scan error',
};

const makeScan = payload => ({ type: actionTypes.MAKE_SCAN, payload });
const makeScanSuccess = payload => ({ type: actionTypes.MAKE_SCAN_SUCCESS, payload });
const makeScanError = payload => ({ type: actionTypes.MAKE_SCAN_ERROR, payload });

const performScan = payload => ({ type: actionTypes.PERFORM_SCAN, payload });
const performScanSuccess = payload => ({ type: actionTypes.PERFORM_SCAN_SUCCESS, payload });
const performScanError = payload => ({ type: actionTypes.PERFORM_SCAN_ERROR, payload });

export default {
    makeScan,
    makeScanSuccess,
    makeScanError,
    performScan,
    performScanSuccess,
    performScanError,
};
