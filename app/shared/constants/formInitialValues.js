const forgotPasswordInitialValues = {
    email: '',
};

const loginInitialValues = { email: '', password: '' };

const signUpInitialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
    newsletter: false,
};

export default {
    signUpInitialValues,
    loginInitialValues,
    forgotPasswordInitialValues,
};
