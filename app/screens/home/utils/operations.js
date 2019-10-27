import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Api from '../../../shared/utils/api';
import actions from '../state/actions';
import firebaseOps from './firebaseOperations';

const makeScan = async dispatch => {
    dispatch(actions.updateScanStatusMessage('asking for permissions'));
    const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    ).catch(err => dispatch(actions.makeScanError(err)));
    if (status === 'granted') {
        dispatch(actions.updateScanStatusMessage('opening camera'));
        ImagePicker.launchCameraAsync({
            quality: 0.6
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

const analyzeScan = async (detections, scan, user, dispatch) => {
    Api.analyzeScanDetections(detections, scan, user)
        .then(res => {
            dispatch(actions.analyzeScanSuccess(res.data));
        })
        .catch(error => dispatch(actions.analyzeScanError(error)));
};

const createScanObject = async (scanUri, user, dispatch) => {
    const scanObject = await firebaseOps
        .createScanObject(scanUri, user)
        .catch(err => dispatch(actions.performScanError(err)));
    dispatch(actions.createScanObjectSuccess(scanObject));
};

export default {
    makeScan,
    performScan,
    analyzeScan,
    createScanObject
};
