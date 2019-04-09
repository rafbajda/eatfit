export const CREATE_ACCOUNT = '[sign up] create an account';
export const CREATE_ACCOUNT_SUCCESS = '[sign up] create account success';
export const CREATE_ACCOUNT_ERROR = '[sign up] create account error';

export const CREATE_USER_OBJECT = '[sign up] create user object';
export const CREATE_USER_OBJECT_SUCCESS = '[sign up] create user object success';
export const CREATE_USER_OBJECT_ERROR = '[sign up] create user object error';

export const createAccountSuccess = payload => ({ type: CREATE_ACCOUNT_SUCCESS, payload });
export const createAccountError = payload => ({ type: CREATE_ACCOUNT_ERROR, payload });

export const createUserObjectSuccess = payload => ({ type: CREATE_USER_OBJECT_SUCCESS, payload });
export const createUserObjectError = payload => ({ type: CREATE_USER_OBJECT_ERROR, payload });

export const createUserObject = payload => ({ type: CREATE_USER_OBJECT, payload });

export const createAccount = payload => ({ type: CREATE_ACCOUNT, payload });
