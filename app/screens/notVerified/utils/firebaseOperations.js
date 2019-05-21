import firebase from '../../../shared/modules/firebase';

const reloadUserAuth = () => firebase.auth().currentUser.reload();

const updateUserVerificationProperty = (uid, emailVerified) => {
    return firebase
        .firestore()
        .doc(`users/${uid}`)
        .update({ emailVerified });
};

const sendVerificationEmail = () => {
    return firebase.auth().currentUser.sendEmailVerification();
};

export default {
    reloadUserAuth,
    updateUserVerificationProperty,
    sendVerificationEmail,
};
