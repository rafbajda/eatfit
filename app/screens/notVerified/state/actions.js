/* eslint-disable import/prefer-default-export */
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

export const checkVerificationStatus = payload => ({
    type: CHECK_VERIFICATION_STATUS,
    payload,
});

export const sendVerificationEmailSuccess = payload => ({
    type: SEND_VERIFICATION_MAIL_SUCCESS,
    payload,
});
export const sendVerificationEmailError = payload => ({
    type: SEND_VERIFICATION_MAIL_ERROR,
    payload,
});

export const sendVerificationEmail = () => ({
    type: SEND_VERIFICATION_MAIL,
});

export const updateUserVerificationSuccess = () => ({
    type: UPDATE_USER_VERIFICATION_SUCCESS,
});

export const updateUserVerificationError = payload => ({
    type: UPDATE_USER_VERIFICATION_ERROR,
    payload,
});

export const updateUserVerification = payload => ({
    type: UPDATE_USER_VERIFICATION,
    payload,
});
