import * as axios from 'axios';

const useVisionApi = scanUrl =>
    axios.put('https://us-central1-eat-fit7.cloudfunctions.net/Scans_performScan', {
        scanUrl,
    });

const analyzeScanDetections = detections =>
    axios.put('https://us-central1-eat-fit7.cloudfunctions.net/Scans_analyzeScan', { detections });

export default {
    useVisionApi,
    analyzeScanDetections,
};
