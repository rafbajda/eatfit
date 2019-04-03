/* eslint-disable import/prefer-default-export */
import firebaseOps from '../../../shared/utils/firebaseOperations';

export const SEND_VERIFICATION_MAIL = '[verification] send verification email';
export const SEND_VERIFICATION_MAIL_SUCCESS = '[verification] send verification email success';
export const SEND_VERIFICATION_MAIL_ERROR = '[verification] send verification email error';

export const UPDATE_USER_VERIFICATION = '[verification] update user verification';
export const UPDATE_USER_VERIFICATION_SUCCESS = '[verification] update user verification';
export const UPDATE_USER_VERIFICATION_ERROR = '[verification] update user verification';

const sendVerificationEmailSuccess = payload => ({ type: SEND_VERIFICATION_MAIL_SUCCESS, payload });
const sendVerificationEmailError = payload => ({ type: SEND_VERIFICATION_MAIL_ERROR, payload });

export const sendVerificationEmail = () => dispatch => {
    dispatch({
        type: SEND_VERIFICATION_MAIL,
    });
    firebaseOps
        .sendVerificationEmail()
        .then(user => sendVerificationEmailSuccess(user))
        .catch(error => sendVerificationEmailError(error));
};

export const updateUserVerificationSuccess = () => ({ type: UPDATE_USER_VERIFICATION_SUCCESS });
export const updateUserVerificationError = payload => ({
    type: UPDATE_USER_VERIFICATION_ERROR,
    payload,
});

export const updateUserVerification = payload => dispatch => {
    dispatch({
        type: UPDATE_USER_VERIFICATION,
    });
    firebaseOps
        .updateUserVerificationProperty({ ...payload })
        .then(() => dispatch(updateUserVerificationSuccess()))
        .catch(error => dispatch(updateUserVerificationError(error)));
};
