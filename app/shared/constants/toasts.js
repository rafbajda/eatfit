import { globalWhite } from './colors';
import toastStyles from '../styles/toasts';

const { globalInfoToastStyle } = { ...toastStyles };

export const UserMismatchingToast = text => ({
    text,
    type: 'warning',
    style: globalInfoToastStyle,
    textStyle: {
        fontWeight: 'bold',
        color: globalWhite
    },
    duration: 3000
});

export const UserLanguageUpdateToast = text => ({
    text,
    type: 'warning',
    style: globalInfoToastStyle,
    textStyle: {
        fontWeight: 'bold',
        color: globalWhite
    },
    duration: 3000
});

export const emailSentToast = text => ({
    text,
    type: 'warning',
    duration: 1500,
    style: globalInfoToastStyle,
    textStyle: {
        color: globalWhite
    }
});

export const CheckVerificationRefreshToast = text => ({
    text,
    type: 'warning',
    duration: 500,
    style: globalInfoToastStyle,
    textStyle: {
        color: globalWhite
    }
});

export const PasswordResetEmailSentToast = text => ({
    text,
    type: 'warning',
    duration: 2000,
    style: globalInfoToastStyle,
    textStyle: {
        color: globalWhite
    }
});

export const WarningToastMessage = message => ({
    text: message,
    type: 'warning',
    duration: 2000,
    style: globalInfoToastStyle,
    textStyle: {
        color: globalWhite
    }
});

export default {
    WarningToastMessage,
    PasswordResetEmailSentToast,
    CheckVerificationRefreshToast,
    emailSentToast,
    UserMismatchingToast,
    UserLanguageUpdateToast
};
