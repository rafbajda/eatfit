import { Permissions, ImagePicker } from 'expo';
import Api from '../../../shared/utils/api';
import actions from '../state/actions';
import firebaseOps from '../../../shared/utils/firebaseOperations';

const makeScan = async dispatch => {
    // scan in progress
    const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    ).catch(err => dispatch(actions.makeScanError(err)));
    if (status === 'granted') {
        console.log('perm granted');
        ImagePicker.launchCameraAsync({
            quality: 1,
        })
            .then(result => {
                console.log('res: ', result);

                if (!result.cancelled) {
                    console.log('not cancelled :D!', result);
                    dispatch(actions.makeScanSuccess(result.uri));
                }
            })
            .catch(err => dispatch(actions.makeScanError(err)));
    }
};
const performScan = async (scanUri, dispatch) => {
    console.log('performing scan :)');
    const scanObject = await firebaseOps
        .createScanObject(scanUri)
        .catch(err => dispatch(actions.performScanError(err)));
    console.log('performing api: ', scanObject);
    Api.useVisionApi(scanObject.scan_url)
        .then(res => dispatch(actions.performScanSuccess(res.data.data)))
        .catch(error => dispatch(actions.performScanError(error)));
};
const analyzeScan = (detections, dispatch) => {
    console.log(detections);
};

// const handleScan = (scanUri, dispatch) => {
//     console.log('handle scan :D!', scanUri);
//     firebaseOps.createScanObject();
// };

export default {
    makeScan,
    performScan,
    analyzeScan,
    // handleScan,
};
