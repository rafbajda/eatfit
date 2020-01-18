import firebase from '../../../shared/modules/firebase';

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
    updateUserVerificationProperty,
    sendVerificationEmail
};
