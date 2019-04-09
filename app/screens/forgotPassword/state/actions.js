/* eslint-disable import/prefer-default-export */
export const SEND_RESET_PASSWORD_MAIL = '[forgot password] send reset password mail';
export const SEND_RESET_PASSWORD_MAIL_SUCCESS =
    '[forgot password] send reset password mail success';
export const SEND_RESET_PASSWORD_MAIL_ERROR = '[forgot password] send reset password mail error';

export const sendResetPasswordMailSuccess = payload => ({
    type: SEND_RESET_PASSWORD_MAIL_SUCCESS,
    payload,
});
export const sendResetPasswordMailError = payload => ({
    type: SEND_RESET_PASSWORD_MAIL_ERROR,
    payload,
});

export const sendResetPasswordMail = payload => ({ type: SEND_RESET_PASSWORD_MAIL, payload });
