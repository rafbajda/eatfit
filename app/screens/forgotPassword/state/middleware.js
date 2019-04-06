import { Toast } from 'native-base';
import { SEND_RESET_PASSWORD_MAIL_SUCCESS } from './actions';
import screens from '../../../navigation/screens';
import { PasswordResetEmailSentToast } from '../../../shared/constants/toasts';

const forgotPasswordMiddleware = () => next => action => {
    if (typeof action === 'object') {
        const nav = action && action.payload ? action.payload : null;

        switch (action.type) {
            case SEND_RESET_PASSWORD_MAIL_SUCCESS:
                if (nav) {
                    nav.navigate(screens.Login);
                }
                Toast.show(PasswordResetEmailSentToast);
                break;
            default:
                return next(action);
        }
    }
    return next(action);
};

export default forgotPasswordMiddleware;
