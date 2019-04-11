import { actionTypes } from './actions';

import ops from '../utils/operations';

const verificationMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.UPDATE_USER_VERIFICATION:
            ops.updateUserVerification(payload, dispatch);
            break;
        case actionTypes.CHECK_VERIFICATION_STATUS:
            ops.checkVerificationStatus(payload, dispatch);
            break;
        case actionTypes.SEND_VERIFICATION_MAIL:
            ops.sendVerificationMail(dispatch);
            break;
        case actionTypes.SEND_VERIFICATION_MAIL_SUCCESS:
            ops.showEmailToast();
            break;
        case actionTypes.CHECK_VERIFICATION_STATUS_SUCCESS:
            ops.dispatchUpdateVerification(payload, dispatch);
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default verificationMiddleware;
