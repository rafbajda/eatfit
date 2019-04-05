import { Toast } from 'native-base';
import firebase from '../modules/firebase';
import screens from '../../navigation/screens';
import { UserMismatchingToast } from '../constants/toasts';

const getUserById = id => {
    return firebase
        .firestore()
        .collection('users')
        .doc(id)
        .get();
};
const getAuthCurrentUser = () => firebase.auth().currentUser;
const reloadUserAuth = () => firebase.auth().currentUser.reload();

const checkUserNavigation = (nav, setUser) => {
    firebase.auth().onAuthStateChanged(user => {
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
    reloadUserAuth,
    getAuthCurrentUser,
};
