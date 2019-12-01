export const actionTypes = {
    SEND_VERIFICATION_MAIL: '[verification] send verification email',
    SEND_VERIFICATION_MAIL_SUCCESS: '[verification] send verification email success',
    SEND_VERIFICATION_MAIL_ERROR: '[verification] send verification email error',
    UPDATE_USER_VERIFICATION: '[verification] update user verification',
    UPDATE_USER_VERIFICATION_SUCCESS: '[verification] update user verification success',
    UPDATE_USER_VERIFICATION_ERROR: '[verification] update user verification error',
    CHECK_VERIFICATION_STATUS: '[verification] check verification status',
    CHECK_VERIFICATION_STATUS_SUCCESS: '[verification] check verification status success',
    CHECK_VERIFICATION_STATUS_ERROR: '[verification] check verification status error',
};

const checkVerificationStatus = () => ({
    type: actionTypes.CHECK_VERIFICATION_STATUS,
});
const checkVerificationStatusSuccess = payload => ({
    type: actionTypes.CHECK_VERIFICATION_STATUS_SUCCESS,
    payload,
});
const checkVerificationStatusError = payload => ({
    type: actionTypes.CHECK_VERIFICATION_STATUS_SUCCESS,
    payload,
});

const sendVerificationEmail = () => ({
    type: actionTypes.SEND_VERIFICATION_MAIL,
});
const sendVerificationEmailSuccess = payload => ({
    type: actionTypes.SEND_VERIFICATION_MAIL_SUCCESS,
    payload,
});
const sendVerificationEmailError = payload => ({
    type: actionTypes.SEND_VERIFICATION_MAIL_ERROR,
    payload,
});

const updateUserVerification = payload => ({
    type: actionTypes.UPDATE_USER_VERIFICATION,
    payload,
});
const updateUserVerificationSuccess = () => ({
    type: actionTypes.UPDATE_USER_VERIFICATION_SUCCESS,
});
const updateUserVerificationError = payload => ({
    type: actionTypes.UPDATE_USER_VERIFICATION_ERROR,
    payload,
});

export default {
    updateUserVerification,
    updateUserVerificationError,
    updateUserVerificationSuccess,
    sendVerificationEmail,
    sendVerificationEmailError,
    sendVerificationEmailSuccess,
    checkVerificationStatus,
    checkVerificationStatusError,
    checkVerificationStatusSuccess,
};
