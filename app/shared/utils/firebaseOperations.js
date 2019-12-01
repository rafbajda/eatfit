import { Toast } from 'native-base';
import firebase from '../modules/firebase';
import screens from '../../navigation/screens';
import { UserMismatchingToast } from '../constants/toasts';
import ops from './helpers';
import NavigationService from '../../navigation/NavigationService';

const getAuthCurrentUser = () => firebase.auth().currentUser;

const getUserById = id => {
    return firebase
        .firestore()
        .collection('users')
        .doc(id)
        .get();
};

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
                    NavigationService.navigate(screens.Home);
                } else {
                    NavigationService.navigate(screens.NotVerified);
                }
            }
        })
        .catch(() => {
            Toast.show(UserMismatchingToast);
        });
};

const signOut = () => {
    return firebase.auth().signOut();
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
    signOut,
    createUserInstance,
    getUserById,
    getAuthCurrentUser,
    prepareUserToLogIn,
};
