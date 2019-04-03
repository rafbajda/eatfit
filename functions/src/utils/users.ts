import * as functions from "firebase-functions";
import { db, storage, BUCKET_NAME } from '../firebase'

export const onUserCreate = functions.firestore.document('users/{userId}').onCreate(async (snap, context) => {
    const batch = db.batch();
    const bucket = storage.bucket(BUCKET_NAME);
    const userId = context.params.userId;
    const userRef = db.doc(`users/${userId}`)
    const defaultImagePath = 'defaults/default-avatar.jpg';
    const file = bucket.file(defaultImagePath);

    await file.getSignedUrl({
        action: 'read',
        expires: '03-09-2491'
    }).then(urls => {
        const downloadUrl = urls[0];
        batch.update(userRef, {
            photoUrl: downloadUrl
        })
    }).catch(err => console.log(err))

    return batch.commit();
})

