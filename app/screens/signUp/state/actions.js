import firebaseOps from '../../../shared/utils/firebaseOperations';

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

export const createUserObject = payload => dispatch => {
    dispatch({ type: CREATE_USER_OBJECT });
    firebaseOps
        .createUserInstance(payload)
        .then(user => dispatch(createUserObjectSuccess(user)))
        .catch(error => dispatch(createUserObjectError(error)));
};

export const createAccount = payload => dispatch => {
    dispatch({ type: CREATE_ACCOUNT });
    const { email, password, newsletter } = { ...payload };
    firebaseOps
        .signUp(email, password)
        .then(userInfo => {
            dispatch(createAccountSuccess({ ...userInfo.user, newsletter }));
        })
        .catch(error => dispatch(createAccountError(error)));
};
