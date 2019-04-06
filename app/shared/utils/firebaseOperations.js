import { Toast } from 'native-base';
import firebase from '../modules/firebase';
import screens from '../../navigation/screens';
import { UserMismatchingToast } from '../constants/toasts';

const resetPassword = email => firebase.auth().sendPasswordResetEmail(email);

const getUserById = id => {
    return firebase
        .firestore()
        .collection('users')
        .doc(id)
        .get();
};
const getAuthCurrentUser = () => firebase.auth().currentUser;
const reloadUserAuth = () => firebase.auth().currentUser.reload();

const createUserSocialInstance = user =>
    firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .set({
            uid: user.uid,
            photo_url: null,
            email: user.email,
            email_verified: user.emailVerified,
            newsletter: user.newsletter,
            is_social: true,
        });

const checkUserNavigation = (nav, setUser) => {
    firebase.auth().onAuthStateChanged(user => {
        console.log(user);

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
                        createUserSocialInstance(user);
                        console.log('no ni ma ;p');
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

const createUserInstance = user =>
    firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .set({
            uid: user.uid,
            photo_url: null,
            email: user.email,
            email_verified: user.emailVerified,
            newsletter: user.newsletter,
            is_social: false,
        });

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
    resetPassword,
};
