import { Toast } from 'native-base';
import firebase from '../modules/firebase';
import screens from '../../navigation/screens';
import { UserMismatchingToast } from '../constants/toasts';
import ops from './helpers';
import NavigationService from '../../navigation/NavigationService';
import I18n from 'i18n-js';

const getAuthCurrentUser = () => firebase.auth().currentUser;

const getUserById = id => {
    return firebase
        .firestore()
        .collection('users')
        .doc(id)
        .get();
};

const prepareUserToLogIn = (user, setUser, setLanguage) => {
    getUserById(user.uid)
        .then(doc => {
            if (doc.exists) {
                doc.ref.update({
                    ...doc.data(),
                    last_login_at: new Date()
                });
                const userObject = doc.data();
                const { language } = userObject;
                console.log('user user: ', userObject, language);

                setUser(userObject);
                setLanguage(language);
                if (userObject.email_verified || userObject.is_social) {
                    NavigationService.navigate(screens.Home);
                } else {
                    NavigationService.navigate(screens.NotVerified);
                }
            }
        })
        .catch(() => {
            const { t } = I18n;
            const toastMessage = t('toasts.userAccountObjectError');
            Toast.show(UserMismatchingToast(toastMessage));
        });
};

const signOut = () => {
    return firebase.auth().signOut();
};

const reloadUserAuth = () => firebase.auth().currentUser.reload();

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
            language: user.language || null
        });
};

export default {
    signOut,
    createUserInstance,
    getUserById,
    getAuthCurrentUser,
    prepareUserToLogIn,
    reloadUserAuth
};
