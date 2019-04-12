import { Toast } from 'native-base';
import firebase from '../modules/firebase';
import screens from '../../navigation/screens';
import { UserMismatchingToast } from '../constants/toasts';
import ops from './helpers';

// TODO: find better solution for this problem
let navigation;

const signInEmail = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

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

const prepareUserToLogIn = (user, setUser) => {
    getUserById(user.uid)
        .then(doc => {
            if (doc.exists) {
                doc.ref.update({
                    ...doc.data(),
                    last_login_at: new Date(),
                });
                const userObject = doc.data();
                setUser(userObject);
                if (userObject.email_verified || userObject.is_social) {
                    navigation.navigate(screens.Home);
                } else {
                    navigation.navigate(screens.NotVerified);
                }
            }
        })
        .catch(() => {
            Toast.show(UserMismatchingToast);
        });
};

const checkUserNavigation = (nav, setUser) => {
    navigation = nav;
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            prepareUserToLogIn(user, setUser, nav);
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

const createUserInstance = data => {
    let user = null;
    let provider = 'email';
    if (data.user && data.additionalUserInfo) {
        provider = data.additionalUserInfo.providerId;
    }
    user = ops.createUserObjectByProvider(provider, data);

    return firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .set({
            uid: user.uid || null,
            first_name: user.firstName || null,
            last_name: user.lastName || null,
            email: user.email || null,
            email_verified: user.emailVerified || false,
            photo_url: user.photoUrl || null,
            login_provider: user.loginProvider || null,
            is_social: user.isSocial || false,
            newsletter: user.newsletter || false,
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
    resetPassword,
    signInEmail,
    prepareUserToLogIn,
};
