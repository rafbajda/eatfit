import * as yup from 'yup';

export const confirmPasswordValidator = ref =>
    yup
        .string()
        .label('Confirm Password')
        .min(6, 'Minimal length is 6 characters')
        .oneOf([yup.ref(ref)], 'Passwords do not match')
        .required('Password confirm is required');

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

export const checkboxRequiredValidator = yup.boolean().required();
export const checkboxValidator = yup.boolean();
