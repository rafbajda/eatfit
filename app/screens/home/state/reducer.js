import { actionTypes } from './actions';
import { actionTypes as scanHistoryActionTypes } from '../../scansHistory/state/actions';
import initialState from '../../../shared/constants/state';
import hps from '../utils/helpers';

const initialScansState = initialState.scans;

const scansReducer = (state = initialScansState, action) => {
    switch (action.type) {
        case actionTypes.MAKE_SCAN:
            return { ...state, isLoading: true };
        case actionTypes.CREATE_SCAN_OBJECT_SUCCESS:
            return {
                ...state,
                latestScan: hps.normalizeScanToCamelCase(action.payload.scanObject)
            };
        case actionTypes.PERFORM_SCAN_SUCCESS:
            return { ...state, isLoading: false };
        case actionTypes.ANALYZE_SCAN_SUCCESS:
            return {
                ...state,
                latestScan: hps.normalizeScanToCamelCase(action.payload.data)
            };
        case actionTypes.UPDATE_SCAN_STATUS_MESSAGE:
            return {
                ...state,
                scanStatusMessage: action.payload
            };
        case actionTypes.GET_ALL_SCANS_SUCCESS:
            return {
                ...state,
                allScans: action.payload
            };
        case scanHistoryActionTypes.OPEN_PAST_SCAN:
            return {
                ...state,
                latestScan: hps.normalizeScanToCamelCase(action.payload)
            };
        default:
            return state;
    }
};

export default scansReducer;
