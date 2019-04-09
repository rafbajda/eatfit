/* eslint-disable no-case-declarations */
import { Toast } from 'native-base';
import {
    CHECK_VERIFICATION_STATUS_SUCCESS,
    updateUserVerification,
    SEND_VERIFICATION_MAIL,
    sendVerificationEmailSuccess,
    sendVerificationEmailError,
    checkVerificationStatusSuccess,
    CHECK_VERIFICATION_STATUS,
    checkVerificationStatusError,
    UPDATE_USER_VERIFICATION,
    updateUserVerificationSuccess,
    updateUserVerificationError,
} from './actions';
import firebaseOps from '../../../shared/utils/firebaseOperations';
import { emailSentToast, CheckVerificationRefreshToast } from '../../../shared/constants/toasts';
import screens from '../../../navigation/screens';

const verificationMiddleware = store => next => action => {
    if (typeof action === 'object') {
        switch (action.type) {
            case UPDATE_USER_VERIFICATION:
                const { user, nav } = { ...action.payload };
                if (!user.emailVerified) {
                    Toast.show(CheckVerificationRefreshToast);
                    store.dispatch(updateUserVerificationSuccess());
                } else {
                    firebaseOps
                        .updateUserVerificationProperty(user.uid, user.emailVerified)
                        .then(() => {
                            nav.navigate(screens.Home);
                            store.dispatch(updateUserVerificationSuccess());
                        })
                        .catch(error => store.dispatch(updateUserVerificationError(error)));
                }
                break;
            case CHECK_VERIFICATION_STATUS:
                firebaseOps
                    .reloadUserAuth()
                    .then(() => {
                        const tempUser = firebaseOps.getAuthCurrentUser();
                        const pd = { user: tempUser, nav: action.payload };
                        store.dispatch(checkVerificationStatusSuccess(pd));
                    })
                    .catch(error => checkVerificationStatusError(error));
                break;
            case SEND_VERIFICATION_MAIL:
                Toast.show(emailSentToast);
                firebaseOps
                    .sendVerificationEmail()
                    .then(data => sendVerificationEmailSuccess(data))
                    .catch(error => sendVerificationEmailError(error));
                break;
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
