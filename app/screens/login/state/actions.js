export const actionTypes = {
    LOGIN_EMAIL: '[login] login email',
    LOGIN_EMAIL_SUCCESS: '[login] login email success',
    LOGIN_EMAIL_ERROR: '[login] login email error',
    LOGIN_FACEBOOK: '[login] login facebook',
    LOGIN_FACEBOOK_SUCCESS: '[login] login facebook success',
    LOGIN_FACEBOOK_ERROR: '[login] login facebook error',
    LOGIN_GOOGLE: '[login] login google',
    LOGIN_GOOGLE_SUCCESS: '[login] login google success',
    LOGIN_GOOGLE_ERROR: '[login] login google error',
    CHECK_USER_OBJECT_EXISTENCE: '[login] check user existence',
    CHECK_USER_OBJECT_EXISTENCE_SUCCESS: '[login] check user existence success',
    CHECK_USER_OBJECT_EXISTENCE_ERROR: '[login] check user existence error'
};

const loginEmail = payload => ({
    type: actionTypes.LOGIN_EMAIL,
    payload
});
const loginEmailSuccess = payload => ({
    type: actionTypes.LOGIN_EMAIL_SUCCESS,
    payload
});
const loginEmailError = payload => ({
    type: actionTypes.LOGIN_EMAIL_ERROR,
    payload
});

const loginFacebook = () => ({ type: actionTypes.LOGIN_FACEBOOK });
const loginFacebookSuccess = payload => ({
    type: actionTypes.LOGIN_FACEBOOK_SUCCESS,
    payload
});
const loginFacebookError = payload => ({
    type: actionTypes.LOGIN_FACEBOOK_ERROR,
    payload
});

const loginGoogle = () => ({ type: actionTypes.LOGIN_GOOGLE });
const loginGoogleSuccess = payload => ({
    type: actionTypes.LOGIN_GOOGLE_SUCCESS,
    payload
});
const loginGoogleError = payload => ({
    type: actionTypes.LOGIN_GOOGLE_ERROR,
    payload
});

const checkUserObjectExistence = payload => ({
    type: actionTypes.CHECK_USER_OBJECT_EXISTENCE,
    payload
});
const checkUserObjectExistenceSuccess = payload => ({
    type: actionTypes.CHECK_USER_OBJECT_EXISTENCE_SUCCESS,
    payload
});
const checkUserObjectExistenceError = payload => ({
    type: actionTypes.CHECK_USER_OBJECT_EXISTENCE_ERROR,
    payload
});

export default {
    loginEmail,
    loginEmailSuccess,
    loginEmailError,
    loginFacebook,
    loginFacebookSuccess,
    loginFacebookError,
    loginGoogle,
    loginGoogleSuccess,
    loginGoogleError,
    checkUserObjectExistence,
    checkUserObjectExistenceSuccess,
    checkUserObjectExistenceError
};
