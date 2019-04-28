import * as axios from 'axios';
// TODO: NEED TO CONNECT BILLING ACCOUNT TO ACCESS VISION API
const useVisionApi = scanUrl =>
    axios.put('https://us-central1-eat-fit7.cloudfunctions.net/Scans_performScan', {
        scanUrl,
    });

export default {
    useVisionApi,
};
