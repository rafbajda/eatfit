/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';
import {
    emailValidator,
    passwordValidator,
    checkboxRequiredValidator,
    checkboxValidator,
    confirmPasswordValidator,
} from './validators';

export const forgotPasswordSchema = yup.object().shape({
    email: emailValidator,
});

export const loginSchema = yup.object().shape({
    email: emailValidator,
    password: passwordValidator,
});

export const signUpSchema = yup.object().shape({
    email: emailValidator,
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator('password'),
    terms: checkboxRequiredValidator,
    newsletter: checkboxValidator,
});
