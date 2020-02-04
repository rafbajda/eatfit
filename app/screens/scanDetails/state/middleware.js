import { actionTypes } from './actions';
import ops from '../utils/operations';

const substanceDetailsMiddleware = () => next => action => {
    switch (action.type) {
        case actionTypes.SET_SUBSTANCE_DETAILS:
            ops.goToSubstanceDetails();
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default substanceDetailsMiddleware;
