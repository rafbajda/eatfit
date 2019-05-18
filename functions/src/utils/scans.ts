import * as functions from "firebase-functions";
import { db, storage, BUCKET_NAME } from '../firebase'
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
import hps from './helpers';
import { Shot } from "../models/Scans";
import * as _ from 'lodash';

export const analyzeScan = functions.https.onRequest(async (req, res) => {
    const batch = db.batch();
    const detections = req.body.detections;
    const scan = req.body.scan;
    const scanRef = db.doc(`scans/${scan.id}`);
    const shotsRef = db.collection('/substance_shot');
    const substancesRef = db.collection('/substances');
    const shots = await shotsRef.get().then(snap => snap.docs.map(doc => doc.data()));
    const substances = await substancesRef.get().then(snap => snap.docs.map(doc => doc.data()));
    const normalizedShots: Array<Shot> = shots.map(shot => hps.normalizeKeysToCamelCase(shot)) as Shot[];
    const substanceIds = hps.findSubstanceIds(detections, normalizedShots);
    const matchedSubstances = substances.filter(sub => _.includes(substanceIds, sub.id));
    await scanRef.get().then(doc => {
        if (doc.exists) {
            const scanObject = doc.data();
            const updatedObject = {
                ...scanObject,
                substances: matchedSubstances
            }
            console.log('final scan: ', updatedObject);
            batch.update(scanRef, updatedObject);
            res.send({ data: updatedObject });
        }
    }).catch(err => console.log(err))
    return batch.commit();
});

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
