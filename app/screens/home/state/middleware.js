import { actionTypes } from './actions';
import ops from '../utils/operations';

const homeMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.MAKE_SCAN:
            ops.makeScan(dispatch);
            break;
        case actionTypes.MAKE_SCAN_SUCCESS:
            ops.handleScan(payload, dispatch);
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default homeMiddleware;
