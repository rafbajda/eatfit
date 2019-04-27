export const actionTypes = {
    MAKE_SCAN: '[home] make a scan',
    MAKE_SCAN_SUCCESS: '[home] make a scan success',
    MAKE_SCAN_ERROR: '[home] make a scan error',
};

const makeScan = payload => ({ type: actionTypes.MAKE_SCAN, payload });
const makeScanSuccess = payload => ({ type: actionTypes.MAKE_SCAN_SUCCESS, payload });
const makeScanError = payload => ({ type: actionTypes.MAKE_SCAN_ERROR, payload });

export default {
    makeScan,
    makeScanSuccess,
    makeScanError,
};
