import * as yup from 'yup';
import {
    emailValidator,
    passwordValidator,
    checkboxRequiredValidator,
    checkboxValidator,
    confirmPasswordValidator,
    noNumbersValidator,
} from './validators';

const forgotPasswordSchema = yup.object().shape({
    email: emailValidator,
});

const loginSchema = yup.object().shape({
    email: emailValidator,
    password: passwordValidator,
});

const signUpSchema = yup.object().shape({
    email: emailValidator,
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator('password'),
    terms: checkboxRequiredValidator,
    newsletter: checkboxValidator,
});

const profileSchema = yup.object().shape({
    firstName: noNumbersValidator,
    lastName: noNumbersValidator,
});

export default {
    signUpSchema,
    loginSchema,
    forgotPasswordSchema,
    profileSchema,
};
