import { globalWhite } from './Colors';
import { globalInfoToastStyle } from '../styles/toasts';

/* eslint-disable import/prefer-default-export */
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
