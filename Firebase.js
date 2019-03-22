/* eslint-disable import/prefer-default-export */
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyATKIiKmLxx0wPQJ48MTAAfoPM55Aj_cbI',
    authDomain: 'eat-fit7.firebaseapp.com',
    databaseURL: 'https://eat-fit7.firebaseio.com',
    projectId: 'eat-fit7',
    storageBucket: 'eat-fit7.appspot.com',
    messagingSenderId: '1017284811206',
};
firebase.initializeApp(config);

export const db = firebase.firestore();
