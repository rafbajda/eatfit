import * as Google from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook'
import { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID } from 'react-native-dotenv';
import { Toast } from 'native-base';
import firebase from './firebase';
import { WarningToastMessage } from '../constants/toasts';

const socialConfig = {
    googleClientId: GOOGLE_CLIENT_ID,
    facebookAppId: FACEBOOK_APP_ID,
};

export default class socialService {
    static async loginWithFacebook() {
        try {
            const { type, token } = await Facebook.logInWithReadPermissionsAsync(
                socialConfig.facebookAppId,
                {
                    permissions: ['public_profile'],
                }
            );

            if (type === 'success' && token) {
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
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
            const { type, accessToken, idToken } = await Google.logInAsync({
                clientId: socialConfig.googleClientId,
            });

            if (type === 'success' && accessToken && idToken) {
                const credential = firebase.auth.GoogleAuthProvider.credential(
                    idToken,
                    accessToken
                );
                return firebase.auth().signInAndRetrieveDataWithCredential(credential);
            }
            return new Promise(resolve => resolve({ cancelled: true }));
        } catch ({ message }) {
            Toast.show(WarningToastMessage(message));
        }
        return new Promise(resolve => resolve({ error: true }));
    }
}
