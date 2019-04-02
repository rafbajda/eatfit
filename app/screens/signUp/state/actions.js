export const CREATE_ACCOUNT = '[sign up] create an account';
export const CREATE_ACCOUNT_SUCCESS = '[sign up] create account success';
export const CREATE_ACCOUNT_ERROR = '[sign up] create account error';

export const createAccount = payload => (dispatch, getState, { getFirebase }) => {
    dispatch({ type: CREATE_ACCOUNT });
    const {email, password, confirmPassword, }

};
export const createAccountSuccess = payload => ({ type: CREATE_ACCOUNT_SUCCESS, payload });
export const createAccountError = payload => ({ type: CREATE_ACCOUNT_ERROR, payload });
