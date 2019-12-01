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

export const checkboxRequiredValidator = yup
    .boolean()
    .required()
    .oneOf([true], 'Accepting Terms and Conditions is required');

export const checkboxValidator = yup.boolean().required();

export const noNumbersValidator = yup
    .string()
    .nullable()
    .matches(/[a-zA-Z]+/, {
        message: 'Only letters are available',
        excludeEmptyString: true,
    });
