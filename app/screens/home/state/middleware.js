import actions, { actionTypes } from './actions';
import ops from '../utils/operations';

const homeMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.MAKE_SCAN:
            ops.makeScan(dispatch);
            break;
        case actionTypes.MAKE_SCAN_SUCCESS:
            dispatch(actions.performScan(payload));
            break;
        case actionTypes.PERFORM_SCAN:
            ops.performScan(payload, dispatch);
            break;
        case actionTypes.PERFORM_SCAN_SUCCESS:
            ops.analyzeScan(payload, dispatch);
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default homeMiddleware;
