/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';

import {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSENGER_SENDER_ID,
} from 'react-native-dotenv';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSENGER_SENDER_ID,
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
