export const actionTypes = {
    CREATE_ACCOUNT: '[sign up] create an account',
    CREATE_ACCOUNT_SUCCESS: '[sign up] create account success',
    CREATE_ACCOUNT_ERROR: '[sign up] create account error',
};

const createAccount = payload => ({ type: actionTypes.CREATE_ACCOUNT, payload });
const createAccountSuccess = payload => ({ type: actionTypes.CREATE_ACCOUNT_SUCCESS, payload });
const createAccountError = payload => ({ type: actionTypes.CREATE_ACCOUNT_ERROR, payload });

export default {
    createAccount,
    createAccountSuccess,
    createAccountError,
};
