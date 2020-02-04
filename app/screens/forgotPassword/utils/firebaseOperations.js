import firebase from '../../../shared/modules/firebase';

const resetPassword = email => firebase.auth().sendPasswordResetEmail(email);

export default {
    resetPassword
};
