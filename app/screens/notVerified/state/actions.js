/* eslint-disable import/prefer-default-export */
import { Toast } from 'native-base';
import firebaseOps from '../../../shared/utils/firebaseOperations';
import { emailSentToast, CheckVerificationRefreshToast } from '../../../shared/constants/toasts';
import screens from '../../../navigation/screens';

export const SEND_VERIFICATION_MAIL = '[verification] send verification email';
export const SEND_VERIFICATION_MAIL_SUCCESS = '[verification] send verification email success';
export const SEND_VERIFICATION_MAIL_ERROR = '[verification] send verification email error';

export const UPDATE_USER_VERIFICATION = '[verification] update user verification';
export const UPDATE_USER_VERIFICATION_SUCCESS = '[verification] update user verification success';
export const UPDATE_USER_VERIFICATION_ERROR = '[verification] update user verification error';

export const CHECK_VERIFICATION_STATUS = '[verification] check verification status';
export const CHECK_VERIFICATION_STATUS_SUCCESS = '[verification] check verification status success';
export const CHECK_VERIFICATION_STATUS_ERROR = '[verification] check verification status error';

export const checkVerificationStatusSuccess = payload => ({
    type: CHECK_VERIFICATION_STATUS_SUCCESS,
    payload,
});
export const checkVerificationStatusError = payload => ({
    type: CHECK_VERIFICATION_STATUS_SUCCESS,
    payload,
});

export const checkVerificationStatus = payload => dispatch => {
    dispatch({
        type: CHECK_VERIFICATION_STATUS,
    });

    firebaseOps
        .reloadUserAuth()
        .then(() => {
            const user = firebaseOps.getAuthCurrentUser();
            const pd = { user, nav: payload };
            dispatch(checkVerificationStatusSuccess(pd));
        })
        .catch(error => checkVerificationStatusError(error));
};

const sendVerificationEmailSuccess = payload => ({ type: SEND_VERIFICATION_MAIL_SUCCESS, payload });
const sendVerificationEmailError = payload => ({ type: SEND_VERIFICATION_MAIL_ERROR, payload });

export const sendVerificationEmail = () => dispatch => {
    dispatch({
        type: SEND_VERIFICATION_MAIL,
    });
    Toast.show(emailSentToast);
    firebaseOps
        .sendVerificationEmail()
        .then(user => sendVerificationEmailSuccess(user))
        .catch(error => sendVerificationEmailError(error));
};

export const updateUserVerificationSuccess = () => ({
    type: UPDATE_USER_VERIFICATION_SUCCESS,
});
export const updateUserVerificationError = payload => ({
    type: UPDATE_USER_VERIFICATION_ERROR,
    payload,
});

export const updateUserVerification = payload => dispatch => {
    const { user, nav } = { ...payload };
    dispatch({
        type: UPDATE_USER_VERIFICATION,
    });
    if (!user.emailVerified) {
        Toast.show(CheckVerificationRefreshToast);
        dispatch(updateUserVerificationSuccess());
    } else {
        firebaseOps
            .updateUserVerificationProperty(user.uid, user.emailVerified)
            .then(() => {
                nav.navigate(screens.Home);
                dispatch(updateUserVerificationSuccess());
            })
            .catch(error => dispatch(updateUserVerificationError(error)));
    }
};
