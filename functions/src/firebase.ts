import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';

export const BUCKET_NAME = 'eat-fit7.appspot.com';
export const corsInstance = cors({ origin: true });

const fb = admin.initializeApp(functions.config().firebase);
export const db = fb.firestore();
export const auth = fb.auth();
export const storage = fb.storage();


