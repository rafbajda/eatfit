import { Toast } from 'native-base';
import { CheckVerificationRefreshToast, emailSentToast } from '../../../shared/constants/toasts';
import actions from '../state/actions';
import firebaseOps from '../../../shared/utils/firebaseOperations';
import screens from '../../../navigation/screens';

const updateUserVerification = (data, dispatch) => {
    console.log(data);
    console.log('d: ', dispatch);
    const { user, nav } = { ...data };
    console.log(user, user.emailVerified);
    if (!user.emailVerified) {
        Toast.show(CheckVerificationRefreshToast);
        dispatch(actions.updateUserVerificationSuccess());
    } else {
        console.log('111');
        firebaseOps
            .updateUserVerificationProperty(user.uid, user.emailVerified)
            .then(() => {
                nav.navigate(screens.Home);
                dispatch(actions.updateUserVerificationSuccess());
            })
            .catch(error => dispatch(actions.updateUserVerificationError(error)));
    }
};

const checkVerificationStatus = (data, dispatch) => {
    firebaseOps
        .reloadUserAuth()
        .then(() => {
            const user = firebaseOps.getAuthCurrentUser();
            const payload = { user, nav: data };
            dispatch(actions.checkVerificationStatusSuccess(payload));
        })
        .catch(error => dispatch(actions.checkVerificationStatusError(error)));
};

const sendVerificationMail = dispatch => {
    firebaseOps
        .sendVerificationEmail()
        .then(data => dispatch(actions.sendVerificationEmailSuccess(data)))
        .catch(error => dispatch(actions.sendVerificationEmailError(error)));
};

const showEmailToast = () => Toast.show(emailSentToast);

const dispatchUpdateVerification = (data, dispatch) => dispatch(updateUserVerification(data));

export default {
    sendVerificationMail,
    updateUserVerification,
    checkVerificationStatus,
    showEmailToast,
    dispatchUpdateVerification,
};
