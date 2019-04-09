/* eslint-disable no-case-declarations */
import { Toast } from 'native-base';
import {
    SEND_RESET_PASSWORD_MAIL_SUCCESS,
    SEND_RESET_PASSWORD_MAIL,
    sendResetPasswordMailSuccess,
    sendResetPasswordMailError,
} from './actions';
import screens from '../../../navigation/screens';
import { PasswordResetEmailSentToast } from '../../../shared/constants/toasts';
import firebaseOps from '../../../shared/utils/firebaseOperations';

const forgotPasswordMiddleware = store => next => action => {
    if (typeof action === 'object') {
        switch (action.type) {
            case SEND_RESET_PASSWORD_MAIL:
                const { email, nav } = { ...action.payload };
                firebaseOps
                    .resetPassword(email)
                    .then(() => {
                        store.dispatch(sendResetPasswordMailSuccess(nav));
                    })
                    .catch(error => store.dispatch(sendResetPasswordMailError(error)));
                break;
            case SEND_RESET_PASSWORD_MAIL_SUCCESS:
                const navigation = action.payload;
                if (navigation) {
                    navigation.navigate(screens.Login);
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
