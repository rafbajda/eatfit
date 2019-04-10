import * as yup from 'yup';
import {
    emailValidator,
    passwordValidator,
    checkboxRequiredValidator,
    checkboxValidator,
    confirmPasswordValidator,
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

export default {
    signUpSchema,
    loginSchema,
    forgotPasswordSchema,
};
