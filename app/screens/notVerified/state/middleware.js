import { CHECK_VERIFICATION_STATUS_SUCCESS, updateUserVerification } from './actions';

const verificationMiddleware = store => next => action => {
    if (typeof action === 'object') {
        switch (action.type) {
            case CHECK_VERIFICATION_STATUS_SUCCESS:
                store.dispatch(updateUserVerification(action.payload));
                break;
            default:
                return next(action);
        }
    }
    return next(action);
};

export default verificationMiddleware;
