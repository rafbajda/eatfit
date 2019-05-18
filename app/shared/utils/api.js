import * as axios from 'axios';

const useVisionApi = scanUrl =>
    axios.put('https://us-central1-eat-fit7.cloudfunctions.net/Scans_performScan', {
        scanUrl,
    });

const analyzeScanDetections = (detections, scan) =>
    axios.put('https://us-central1-eat-fit7.cloudfunctions.net/Scans_analyzeScan', {
        detections,
        scan,
    });

export default {
    useVisionApi,
    analyzeScanDetections,
};
