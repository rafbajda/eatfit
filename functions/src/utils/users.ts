import * as functions from "firebase-functions";
import { db, storage, BUCKET_NAME } from '../firebase'
import { completeUserInstance } from "./helpers";
import { User } from "../models/User";

const defaultImagePath = 'defaults/default-avatar.jpg';

export const onUserCreate = functions.firestore.document('users/{userId}').onCreate(async (snap, context) => {
    const batch = db.batch();
    const bucket = storage.bucket(BUCKET_NAME);
    const userId = context.params.userId;
    const userRef = db.doc(`users/${userId}`)
    const file = bucket.file(defaultImagePath);
    let user;

    await userRef.get().then(doc => {
        if (doc.exists) {
            user = completeUserInstance(doc.data() as User)
            console.log('user after completion: ', user)
        } else {
            console.log("doc doesn't exist")
        }
    }).catch(error => console.log(error));

    await file.getSignedUrl({
        action: 'read',
        expires: '03-09-2491'
    }).then(urls => {
        const downloadUrl = urls[0];
        batch.update(userRef, {
            ...user,
            photo_url: downloadUrl,
        })
    }).catch(err => console.log(err))

    return batch.commit();
})