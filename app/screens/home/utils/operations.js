import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Api from '../../../shared/utils/api';
import actions from '../state/actions';
import firebaseOps from './firebaseOperations';
import globalHps from '../../../shared/utils/helpers';

const makeScan = async dispatch => {
    dispatch(actions.updateScanStatusMessage('asking for permissions'));
    const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    ).catch(err => dispatch(actions.makeScanError(err)));
    if (status === 'granted') {
        dispatch(actions.updateScanStatusMessage('processing camera'));
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

const performScan = async (scanObjectData, dispatch) => {
    console.log('scanobjjjjj>', scanObject);
    const { scanObject, localizationUrl } = scanObjectData;
    Api.useVisionApi(localizationUrl)
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
    const scanObjectData = await firebaseOps
        .createScanObject(scanUri, user)
        .catch(err => dispatch(actions.performScanError(err)));
    dispatch(actions.createScanObjectSuccess(scanObjectData));
};

const getAllScans = async (user, dispatch) => {
    firebaseOps
        .getUserScans(user)
        .then(scansSnapshot => {
            const scans = scansSnapshot.docs.map(doc => doc.data());
            dispatch(actions.getAllScansSuccess(scans));
        })
        .catch(err => dispatch(actions.getAllScansError(err)));
};

export default {
    makeScan,
    performScan,
    analyzeScan,
    createScanObject,
    getAllScans
};
