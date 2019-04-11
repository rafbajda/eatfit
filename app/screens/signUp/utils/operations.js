import firebaseOps from '../../../shared/utils/firebaseOperations';
import actions from '../state/actions';
import globalActions from '../../../shared/state/actions';
import verificationActions from '../../notVerified/state/actions';

const createAccount = (data, dispatch) => {
    const { email, password, newsletter } = { ...data };
    firebaseOps
        .signUp(email, password)
        .then(userInfo => {
            dispatch(actions.createAccountSuccess({ ...userInfo.user, newsletter }));
        })
        .catch(error => dispatch(actions.createAccountError(error)));
};

const dispatchCreateUserObject = (data, dispatch) => dispatch(globalActions.createUserObject(data));

const sendVerification = store => {
    let isSocial;
    let loginProvider;
    if (store.getState().auth.user) {
        ({ isSocial, loginProvider } = store.getState().auth.user);
    }
    if (!isSocial && loginProvider === 'email') {
        store.dispatch(verificationActions.sendVerificationEmail());
    }
};

export default {
    createAccount,
    dispatchCreateUserObject,
    sendVerification,
};
