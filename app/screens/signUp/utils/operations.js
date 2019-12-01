import firebaseOps from './firebaseOperations';
import actions from '../state/actions';
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
    sendVerification,
};
