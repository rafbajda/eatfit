import firebase from '../../../shared/modules/firebase';

const signUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export default {
    signUp,
};
