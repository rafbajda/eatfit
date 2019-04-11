import { Toast } from 'native-base';
import { CheckVerificationRefreshToast, emailSentToast } from '../../../shared/constants/toasts';
import actions from '../state/actions';
import firebaseOps from '../../../shared/utils/firebaseOperations';
import screens from '../../../navigation/screens';

const updateUserVerification = (data, dispatch) => {
    const { user, nav } = { ...data };
    if (!user.emailVerified) {
        Toast.show(CheckVerificationRefreshToast);
        dispatch(actions.updateUserVerificationSuccess());
    } else {
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

const dispatchUpdateVerification = (data, dispatch) =>
    dispatch(actions.updateUserVerification(data));

export default {
    sendVerificationMail,
    updateUserVerification,
    checkVerificationStatus,
    showEmailToast,
    dispatchUpdateVerification,
};
