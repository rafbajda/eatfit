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

const getProfileInitialValues = user => {
    const { firstName, lastName, birthday } = { ...user };
    return { firstName, lastName, birthday };
};

export default {
    signUpInitialValues,
    loginInitialValues,
    forgotPasswordInitialValues,
    getProfileInitialValues,
};
