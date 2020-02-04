import { Toast } from 'native-base';
import I18n from 'i18n-js';
import { CheckVerificationRefreshToast, emailSentToast } from '../../../shared/constants/toasts';
import actions from '../state/actions';
import firebaseOps from './firebaseOperations';
import globalFirebaseOps from '../../../shared/utils/firebaseOperations';
import screens from '../../../navigation/screens';
import NavigationService from '../../../navigation/NavigationService';

const updateUserVerification = (data, dispatch) => {
    const user = data;
    if (!user.emailVerified) {
        const { t } = I18n;
        const toastMessage = t('toasts.verificationRefreshed');
        Toast.show(CheckVerificationRefreshToast(toastMessage));
        dispatch(actions.updateUserVerificationSuccess());
    } else {
        firebaseOps
            .updateUserVerificationProperty(user.uid, user.emailVerified)
            .then(() => {
                NavigationService.navigate(screens.Home);
                dispatch(actions.updateUserVerificationSuccess());
            })
            .catch(error => dispatch(actions.updateUserVerificationError(error)));
    }
};

const checkVerificationStatus = dispatch => {
    globalFirebaseOps
        .reloadUserAuth()
        .then(() => {
            const user = globalFirebaseOps.getAuthCurrentUser();
            dispatch(actions.checkVerificationStatusSuccess(user));
        })
        .catch(error => dispatch(actions.checkVerificationStatusError(error)));
};

const sendVerificationMail = dispatch => {
    firebaseOps
        .sendVerificationEmail()
        .then(data => dispatch(actions.sendVerificationEmailSuccess(data)))
        .catch(error => dispatch(actions.sendVerificationEmailError(error)));
};

const showEmailToast = () => {
    const { t } = I18n;
    const toastMessage = t('toasts.emailSent');
    Toast.show(emailSentToast(toastMessage));
};

export default {
    sendVerificationMail,
    updateUserVerification,
    checkVerificationStatus,
    showEmailToast
};
