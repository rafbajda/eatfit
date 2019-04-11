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

const profileInitialValues = {
    firstName: '',
    lastName: '',
    birthday: null,
};

export default {
    signUpInitialValues,
    loginInitialValues,
    forgotPasswordInitialValues,
    profileInitialValues,
};
