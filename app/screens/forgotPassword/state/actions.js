export const actionTypes = {
    SEND_RESET_PASSWORD_MAIL: '[forgot password] send reset password mail',
    SEND_RESET_PASSWORD_MAIL_SUCCESS: '[forgot password] send reset password mail success',
    SEND_RESET_PASSWORD_MAIL_ERROR: '[forgot password] send reset password mail error'
};

const sendResetPasswordMail = payload => ({
    type: actionTypes.SEND_RESET_PASSWORD_MAIL,
    payload
});
const sendResetPasswordMailSuccess = () => ({
    type: actionTypes.SEND_RESET_PASSWORD_MAIL_SUCCESS
});
const sendResetPasswordMailError = payload => ({
    type: actionTypes.SEND_RESET_PASSWORD_MAIL_ERROR,
    payload
});

export default {
    sendResetPasswordMail,
    sendResetPasswordMailSuccess,
    sendResetPasswordMailError
};
