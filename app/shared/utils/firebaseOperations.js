import { Toast } from 'native-base';
import firebase from '../modules/firebase';
import screens from '../../navigation/screens';
import { UserMismatchingToast } from '../constants/toasts';
import ops from './helpers';

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

const checkUserNavigation = (nav, setUser) => {
    firebase.auth().onAuthStateChanged(user => {
        console.log('user: ', user);
        if (user) {
            getUserById(user.uid)
                .then(doc => {
                    if (doc.exists) {
                        const userObject = doc.data();
                        setUser(userObject);
                        if (userObject.emailVerified || userObject.is_social) {
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

const createUserInstance = data => {
    console.log('D: ', data);
    let user = null;
    let provider = 'email';
    if (data.user && data.additionalUserInfo) {
        provider = data.additionalUserInfo.providerId;
    }
    user = ops.createUserObjectByProvider(provider, data);

    console.log('established user: ', user);

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
};
