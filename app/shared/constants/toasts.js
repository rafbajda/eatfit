import { globalWhite } from './colors';
import toastStyles from '../styles/toasts';

const { globalInfoToastStyle } = { ...toastStyles };

export const UserMismatchingToast = {
    text: 'User account object error occurred!',
    type: 'warning',
    position: 'top',
    style: globalInfoToastStyle,
    textStyle: {
        fontWeight: 'bold',
        color: globalWhite,
    },
    duration: 3000,
};

export const emailSentToast = {
    text: 'Email has been sent',
    type: 'warning',
    duration: 1500,
    position: 'top',
    style: globalInfoToastStyle,
    textStyle: {
        color: globalWhite,
    },
};

export const CheckVerificationRefreshToast = {
    text: 'Verification refreshed',
    type: 'warning',
    duration: 500,
    position: 'top',
    style: globalInfoToastStyle,
    textStyle: {
        color: globalWhite,
    },
};

export const PasswordResetEmailSentToast = {
    text: 'Reset password email has been sent',
    type: 'warning',
    duration: 2000,
    position: 'top',
    style: globalInfoToastStyle,
    textStyle: {
        color: globalWhite,
    },
};

export const WarningToastMessage = message => ({
    text: message,
    type: 'warning',
    duration: 2000,
    position: 'top',
    style: globalInfoToastStyle,
    textStyle: {
        color: globalWhite,
    },
});

export default {
    WarningToastMessage,
    PasswordResetEmailSentToast,
    CheckVerificationRefreshToast,
    emailSentToast,
    UserMismatchingToast,
};
