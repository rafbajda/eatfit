import { Toast } from 'native-base';
import firebase from '../modules/firebase';
import screens from '../../navigation/screens';
import { UserMismatchingToast } from '../constants/Toasts';

const getUserById = id => {
    return firebase
        .firestore()
        .collection('users')
        .doc(id)
        .get();
};

const checkUserNavigation = (nav, setUser) => {
    firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        // implement this somewhere
        //         await auth.currentUser.reload()
        // auth.currentUser.getToken(true)
        if (user) {
            getUserById(user.uid)
                .then(doc => {
                    if (doc.exists) {
                        const userObject = doc.data();
                        setUser(userObject);
                        if (userObject.emailVerified) {
                            nav.navigate(screens.Home);
                        } else {
                            nav.navigate(screens.NotVerified);
                        }
                    } else {
                        nav.navigate(screens.Login);
                        Toast.show(UserMismatchingToast);
                    }
                })
                .catch(() => {
                    Toast.show(UserMismatchingToast);
                });
        } else {
            nav.navigate(screens.Login);
        }
    });
};

const updateUserVerificationProperty = (uid, emailVerified) => {
    return firebase
        .firestore()
        .doc(`users/${uid}`)
        .update({ emailVerified });
};

const signOut = () => {
    return firebase.auth().signOut();
};

const signUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

const sendVerificationEmail = () => {
    console.log('jestem tutaj');
    return firebase.auth().currentUser.sendEmailVerification();
};

const createUserInstance = user => {
    return firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .set({
            uid: user.uid,
            photoUrl: null,
            email: user.email,
            emailVerified: user.emailVerified,
            lastLoginAt: new Date(),
            createdAt: new Date(),
            newsletter: user.newsletter,
        });
};

export default {
    checkUserNavigation,
    signOut,
    signUp,
    createUserInstance,
    getUserById,
    sendVerificationEmail,
    updateUserVerificationProperty,
};
