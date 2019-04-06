/* eslint-disable import/prefer-default-export */
import firebaseOps from '../../../shared/utils/firebaseOperations';

export const SEND_RESET_PASSWORD_MAIL = '[forgot password] send reset password mail';
export const SEND_RESET_PASSWORD_MAIL_SUCCESS =
    '[forgot password] send reset password mail success';
export const SEND_RESET_PASSWORD_MAIL_ERROR = '[forgot password] send reset password mail error';

const sendResetPasswordMailSuccess = payload => ({
    type: SEND_RESET_PASSWORD_MAIL_SUCCESS,
    payload,
});
const sendResetPasswordMailError = payload => ({ type: SEND_RESET_PASSWORD_MAIL_ERROR, payload });

export const sendResetPasswordMail = payload => dispatch => {
    dispatch({ type: SEND_RESET_PASSWORD_MAIL });
    const { email, nav } = { ...payload };
    firebaseOps
        .resetPassword(email)
        .then(() => {
            dispatch(sendResetPasswordMailSuccess(nav));
        })
        .catch(error => dispatch(sendResetPasswordMailError(error)));
};
