import hps from '../utils/helpers';

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
    const { firstName, lastName } = { ...user };
    const birthday = hps.getDateFromFirebaseTimestamp(user.birthday);
    return { firstName, lastName, birthday };
};

export default {
    signUpInitialValues,
    loginInitialValues,
    forgotPasswordInitialValues,
    getProfileInitialValues,
};
