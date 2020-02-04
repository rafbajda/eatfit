import * as axios from 'axios';

const useVisionApi = scanUrl =>
    axios.put('https://us-central1-eat-fit7.cloudfunctions.net/Scans_performScan', {
        scanUrl
    });

const analyzeScanDetections = (detections, scan, user) =>
    axios.put('https://us-central1-eat-fit7.cloudfunctions.net/Scans_analyzeScan', {
        detections,
        scan,
        user
    });

export default {
    useVisionApi,
    analyzeScanDetections
};
