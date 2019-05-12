import * as functions from "firebase-functions";
import { db, storage, BUCKET_NAME } from '../firebase'
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();


export const performScan = functions.https.onRequest(async (req, res) => {
    console.log('performScan !!!, ', req.body)
    const scanUrl = req.body.scanUrl;
    const [result] = await client.textDetection(scanUrl);
    const detections = result.textAnnotations;
    console.log('detections: ', detections)
    res.send({ data: detections })
});

export const onScanCreate = functions.firestore.document('scans/{scanId}').onCreate(async (snap, context) => {
    const batch = db.batch();
    const scanId = context.params.scanId;
    const userId = await snap.data().user_id;
    console.log('snap info: ', snap.data(), userId);
    const userRef = db.doc(`users/${userId}`);
    await userRef.get().then(doc => {
        if (doc.exists) {
            const user = doc.data();
            let scanIds = user.scan_ids;
            if (!scanIds) {
                scanIds = [];
            }
            scanIds.push(scanId)
            batch.update(userRef, {
                ...user,
                scan_ids: scanIds
            })
        } else {
            console.log("user document doesn't exist")
        }
    });
    return batch.commit();
});
