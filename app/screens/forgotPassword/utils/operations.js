import { Toast } from 'native-base';
import firebaseOps from '../../../shared/utils/firebaseOperations';
import actions from '../state/actions';
import screens from '../../../navigation/screens';
import { PasswordResetEmailSentToast } from '../../../shared/constants/toasts';

const resetPassword = (data, dispatch) => {
    const { email, nav } = { ...data };
    firebaseOps
        .resetPassword(email)
        .then(() => {
            dispatch(actions.sendResetPasswordMailSuccess(nav));
        })
        .catch(error => dispatch(actions.sendResetPasswordMailError(error)));
};

const changeNavigation = data => {
    const navigation = data;
    if (navigation) {
        navigation.navigate(screens.Login);
    }
    Toast.show(PasswordResetEmailSentToast);
};

export default {
    resetPassword,
    changeNavigation,
};
