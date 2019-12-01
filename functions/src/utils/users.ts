import * as functions from "firebase-functions";
import { db, storage, BUCKET_NAME } from '../firebase'
import hps from "./helpers";
import { User } from "../models/User";

const bucket = storage.bucket(BUCKET_NAME);
const defaultImagePath = 'defaults/default_avatar.png';

export const onUserCreate = functions.firestore.document('users/{userId}').onCreate(async (snap, context) => {
    const batch = db.batch();
    const userId = context.params.userId;
    const userRef = db.doc(`users/${userId}`)
    const file = bucket.file(defaultImagePath);
    let user;

    await userRef.get().then(doc => {
        if (doc.exists) {
            user = hps.completeUserInstance(doc.data() as User)
            console.log('user after completion: ', user)
        } else {
            console.log("doc doesn't exist")
        }
    }).catch(error => console.log(error));

    if (!user.photo_url) {
        console.log('setting default avatar')
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
    } else {
        batch.update(userRef, user)
    }
    return batch.commit();
})

export const onUserUpdate = functions.firestore.document('users/{userId}').onUpdate(async (snap, context) => {
    const batch = db.batch();
    const userId = context.params.userId;
    const userRef = db.doc(`users/${userId}`)
    const file = bucket.file(defaultImagePath);
    let user;

    await userRef.get().then(doc => {
        if (doc.exists) {
            console.log('user before string check: ', doc.data())
            user = hps.checkEmptyStrings(doc.data() as User)
            console.log('user after string check: ', user)
        } else {
            console.log("doc doesn't exist")
        }
    }).catch(error => console.log(error));

    if (!user.photo_url) {
        console.log('setting default avatar')
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
    } else {
        batch.update(userRef, user)
    }
    return batch.commit();
})