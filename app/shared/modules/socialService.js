import { Facebook, Google } from 'expo';

import { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID } from 'react-native-dotenv';
import { Toast } from 'native-base';
import firebase from './firebase';
import { WarningToastMessage } from '../constants/toasts';

const facebookConfig = {
    appId: FACEBOOK_APP_ID,
};

const googleConfig = {
    clientId: GOOGLE_CLIENT_ID,
};

export default class socialService {
    /**
     * Login with Facebook and Firebase
     *
     * Uses Expo Facebook API and authenticates the Facebook user in Firebase
     */
    static async loginWithFacebook() {
        try {
            const { type, token } = await Facebook.logInWithReadPermissionsAsync(
                facebookConfig.appId,
                {
                    permissions: ['public_profile'],
                }
            );

            if (type === 'success' && token) {
                // Build Firebase credential with the Facebook access token.
                const credential = firebase.auth.FacebookAuthProvider.credential(token);

                // Sign in with credential from the Facebook user.
                return firebase.auth().signInAndRetrieveDataWithCredential(credential);
            }
            return new Promise(resolve => resolve({ cancelled: true }));
        } catch ({ message }) {
            Toast.show(WarningToastMessage(message));
        }
        return new Promise(resolve => resolve({ error: true }));
    }

    static async loginWithGoogle() {
        try {
            const { clientId } = googleConfig;

            const { type, accessToken, idToken } = await Google.logInAsync({ clientId });

            if (type === 'success' && accessToken && idToken) {
                console.log('type: ', type);
                /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
                const credential = firebase.auth.GoogleAuthProvider.credential(
                    idToken,
                    accessToken
                );
                console.log('cred: ', credential);
                return firebase.auth().signInAndRetrieveDataWithCredential(credential);
            }
            return new Promise(resolve => resolve({ cancelled: true }));
        } catch ({ message }) {
            Toast.show(WarningToastMessage(message));
        }
        return new Promise(resolve => resolve({ error: true }));
    }
}
