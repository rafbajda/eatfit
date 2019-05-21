import { Toast } from 'native-base';
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
    Toast.show(PasswordResetEmailSentToast);
};

export default {
    resetPassword,
    changeNavigation,
};
