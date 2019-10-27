import actions, { actionTypes } from './actions';
import ops from '../utils/operations';
import NavigationService from '../../../navigation/NavigationService';
import screens from '../../../navigation/screens';

const homeMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.MAKE_SCAN:
            ops.makeScan(dispatch);
            break;
        case actionTypes.MAKE_SCAN_SUCCESS:
            dispatch(actions.createScanObject(payload));
            break;
        case actionTypes.CREATE_SCAN_OBJECT:
            dispatch(actions.updateScanStatusMessage('creating scan object'));
            ops.createScanObject(payload, store.getState().auth.user, dispatch);
            break;
        case actionTypes.CREATE_SCAN_OBJECT_SUCCESS:
            dispatch(actions.performScan(payload));
            break;
        case actionTypes.PERFORM_SCAN:
            dispatch(actions.updateScanStatusMessage('Analyzing image'));
            ops.performScan(payload, dispatch);
            break;
        case actionTypes.PERFORM_SCAN_SUCCESS:
            dispatch(actions.updateScanStatusMessage('Matching substances'));
            dispatch(actions.analyzeScan(payload));
            break;
        case actionTypes.ANALYZE_SCAN:
            ops.analyzeScan(
                payload,
                store.getState().scans.latestScan,
                store.getState().auth.user,
                dispatch
            );
            break;
        case actionTypes.ANALYZE_SCAN_SUCCESS:
            NavigationService.navigate(screens.ScanDetails);
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default homeMiddleware;
