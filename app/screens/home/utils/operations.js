import { Permissions, ImagePicker } from 'expo';
import Api from '../../../shared/utils/api';
import actions from '../state/actions';
import firebaseOps from '../../../shared/utils/firebaseOperations';

const makeScan = async dispatch => {
    const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    ).catch(err => dispatch(actions.makeScanError(err)));
    if (status === 'granted') {
        ImagePicker.launchCameraAsync({
            quality: 1,
        })
            .then(result => {
                if (!result.cancelled) {
                    dispatch(actions.makeScanSuccess(result.uri));
                }
            })
            .catch(err => dispatch(actions.makeScanError(err)));
    }
};
const performScan = async (scanObject, dispatch) => {
    Api.useVisionApi(scanObject.scan_url)
        .then(res => {
            const sepArr = [];
            res.data.data.map(item => {
                const sepDescription = item.description.split(' ');
                return sepDescription.forEach(el => sepArr.push(el));
            });
            dispatch(actions.performScanSuccess(sepArr));
        })
        .catch(error => dispatch(actions.performScanError(error)));
};
const analyzeScan = async (detections, scan, dispatch) => {
    Api.analyzeScanDetections(detections, scan)
        .then(res => {
            dispatch(actions.analyzeScanSuccess(res.data));
        })
        .catch(error => dispatch(actions.analyzeScanError(error)));
};

const createScanObject = async (scanUri, dispatch) => {
    const scanObject = await firebaseOps
        .createScanObject(scanUri)
        .catch(err => dispatch(actions.performScanError(err)));
    dispatch(actions.createScanObjectSuccess(scanObject));
};

export default {
    makeScan,
    performScan,
    analyzeScan,
    createScanObject,
};
