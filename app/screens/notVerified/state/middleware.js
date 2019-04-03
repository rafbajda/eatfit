import { SEND_VERIFICATION_MAIL_SUCCESS, UPDATE_USER_VERIFICATION } from './actions';

const verificationMiddleware = store => next => action => {
    if (typeof action === 'object') {
        switch (action.type) {
            case SEND_VERIFICATION_MAIL_SUCCESS:
                store.dispatch(UPDATE_USER_VERIFICATION);
                break;
            default:
                return next(action);
        }
    }
    return next(action);
};

export default verificationMiddleware;
