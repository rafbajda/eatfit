import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID } from 'react-native-dotenv';
import { Toast } from 'native-base';
import firebase from './firebase';
import { WarningToastMessage } from '../constants/toasts';

const socialConfig = {
    googleClientId: GOOGLE_CLIENT_ID,
    facebookAppId: FACEBOOK_APP_ID
};

export default class socialService {
    static async loginWithFacebook() {
        try {
            Facebook.initializeAsync(socialConfig.facebookAppId).then(
                async () => {
                    const {
                        type,
                        token
                    } = await Facebook.logInWithReadPermissionsAsync(
                        socialConfig.facebookAppId,
                        {
                            permissions: ['public_profile']
                        }
                    );

                    if (type === 'success' && token) {
                        const credential = firebase.auth.FacebookAuthProvider.credential(
                            token
                        );
                        console.log('facebook check', type, token);
                        return firebase.auth().signInWithCredential(credential);
                    }
                    return new Promise(resolve => resolve({ cancelled: true }));
                }
            );
        } catch ({ message }) {
            console.log('err message:', message);
            Toast.show(WarningToastMessage(message));
        }
        return new Promise(resolve => resolve({ error: true }));
    }

    static async loginWithGoogle() {
        try {
            const { type, accessToken, idToken } = await Google.logInAsync({
                clientId: socialConfig.googleClientId
            });

            if (type === 'success' && accessToken && idToken) {
                const credential = firebase.auth.GoogleAuthProvider.credential(
                    idToken,
                    accessToken
                );
                console.log('siema');
                return firebase.auth().signInWithCredential(credential);
            }
            return new Promise(resolve => resolve({ cancelled: true }));
        } catch ({ message }) {
            Toast.show(WarningToastMessage(message));
        }
        return new Promise(resolve => resolve({ error: true }));
    }
}
