import { Facebook } from 'expo';
import firebase from './firebase';

import {FACEBOOK_APP_ID, FACEBOOK_APP_SECRET} from 'react-native-dotenv';

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
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(facebookConfig.appId, {
            permissions: ['public_profile'],
        });

        if (type === 'success' && token) {
            // Build Firebase credential with the Facebook access token.
            const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email,birthday,first_name,gender,last_name,middle_name,picture.type(large),short_name&access_token=${token}`);
      console.log('Logged in!', (await response.json()));
      console.log('tok:', token)
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            console.log('creD: ', credential)

            // Sign in with credential from the Facebook user.
            await firebase.auth().signInAndRetrieveDataWithCredential(credential);
        }
    }
}
