import { actionTypes } from './actions';
import ops from '../utils/operations';

const forgotPasswordMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.SEND_RESET_PASSWORD_MAIL:
            ops.resetPassword(payload, dispatch);
            break;
        case actionTypes.SEND_RESET_PASSWORD_MAIL_SUCCESS:
            ops.changeNavigation(payload);
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default forgotPasswordMiddleware;
