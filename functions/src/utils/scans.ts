import * as functions from "firebase-functions";
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

