export const actionTypes = {
    CREATE_ACCOUNT: '[sign up] create an account',
    CREATE_ACCOUNT_SUCCESS: '[sign up] create account success',
    CREATE_ACCOUNT_ERROR: '[sign up] create account error',
    CREATE_USER_OBJECT: '[sign up] create user object',
    CREATE_USER_OBJECT_SUCCESS: '[sign up] create user object success',
    CREATE_USER_OBJECT_ERROR: '[sign up] create user object error',
};

const createAccount = payload => ({ type: actionTypes.CREATE_ACCOUNT, payload });
const createAccountSuccess = payload => ({ type: actionTypes.CREATE_ACCOUNT_SUCCESS, payload });
const createAccountError = payload => ({ type: actionTypes.CREATE_ACCOUNT_ERROR, payload });

const createUserObject = payload => ({ type: actionTypes.CREATE_USER_OBJECT, payload });
const createUserObjectSuccess = payload => ({
    type: actionTypes.CREATE_USER_OBJECT_SUCCESS,
    payload,
});
const createUserObjectError = payload => ({ type: actionTypes.CREATE_USER_OBJECT_ERROR, payload });

export default {
    createAccountSuccess,
    createAccountError,
    createUserObjectSuccess,
    createUserObjectError,
    createUserObject,
    createAccount,
};
