export const actionTypes = {
    SEND_RESET_PASSWORD_MAIL: '[forgot password] send reset password mail',
    SEND_RESET_PASSWORD_MAIL_SUCCESS: '[forgot password] send reset password mail success',
    SEND_RESET_PASSWORD_MAIL_ERROR: '[forgot password] send reset password mail error',
};

const sendResetPasswordMailSuccess = payload => ({
    type: actionTypes.SEND_RESET_PASSWORD_MAIL_SUCCESS,
    payload,
});
const sendResetPasswordMailError = payload => ({
    type: actionTypes.SEND_RESET_PASSWORD_MAIL_ERROR,
    payload,
});

const sendResetPasswordMail = payload => ({
    type: actionTypes.SEND_RESET_PASSWORD_MAIL,
    payload,
});

export default {
    sendResetPasswordMail,
    sendResetPasswordMailSuccess,
    sendResetPasswordMailError,
};
