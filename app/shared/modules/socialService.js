import { Facebook } from 'expo';
import { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } from 'react-native-dotenv';
import { Toast } from 'native-base';
import firebase from './firebase';
import { WarningToastMessage } from '../constants/toasts';

const facebookConfig = {
    appId: FACEBOOK_APP_ID,
    appSecret: FACEBOOK_APP_SECRET,
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
            return new Promise({ error: true });
        } catch ({ message }) {
            Toast.show(WarningToastMessage(message));
        }
        return new Promise({ error: true });
    }
}
