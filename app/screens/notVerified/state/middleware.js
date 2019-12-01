import actions, { actionTypes } from './actions';
import ops from '../utils/operations';

const verificationMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.UPDATE_USER_VERIFICATION:
            ops.updateUserVerification(payload, dispatch);
            break;
        case actionTypes.CHECK_VERIFICATION_STATUS:
            ops.checkVerificationStatus(dispatch);
            break;
        case actionTypes.SEND_VERIFICATION_MAIL:
            ops.sendVerificationMail(dispatch);
            break;
        case actionTypes.SEND_VERIFICATION_MAIL_SUCCESS:
            ops.showEmailToast();
            break;
        case actionTypes.CHECK_VERIFICATION_STATUS_SUCCESS:
            dispatch(actions.updateUserVerification(payload));
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default verificationMiddleware;
