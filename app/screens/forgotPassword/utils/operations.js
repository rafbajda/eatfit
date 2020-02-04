import { Toast } from 'native-base';
import I18n from 'i18n-js';
import firebaseOps from './firebaseOperations';
import actions from '../state/actions';
import screens from '../../../navigation/screens';
import { PasswordResetEmailSentToast } from '../../../shared/constants/toasts';
import NavigationService from '../../../navigation/NavigationService';

const resetPassword = (data, dispatch) => {
    const { email } = { ...data };
    firebaseOps
        .resetPassword(email)
        .then(() => {
            dispatch(actions.sendResetPasswordMailSuccess());
        })
        .catch(error => dispatch(actions.sendResetPasswordMailError(error)));
};

const changeNavigation = () => {
    NavigationService.navigate(screens.Login);
    const { t } = I18n;
    const toastMessage = t('toasts.passwordResetSent');
    Toast.show(PasswordResetEmailSentToast(toastMessage));
};

export default {
    resetPassword,
    changeNavigation
};
