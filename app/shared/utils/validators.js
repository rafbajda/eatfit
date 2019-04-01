import * as yup from 'yup';

export const emailValidator = yup
    .string()
    .label('Email')
    .email()
    .required();

export const passwordValidator = yup
    .string()
    .label('Password')
    .required()
    .min(6, 'Minimal length is 6 characters');
