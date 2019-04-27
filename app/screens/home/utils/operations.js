import { Permissions, ImagePicker } from 'expo';
import RNTextDetector from 'react-native-text-detector';
import actions from '../state/actions';
import firebaseOps from '../../../shared/utils/firebaseOperations';

const makeScan = async dispatch => {
    // scan in progress
    const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    ).catch(err => dispatch(actions.makeScanError(err)));
    if (status === 'granted') {
        const result = await ImagePicker.launchCameraAsync({
            quality: 1,
        }).catch(err => dispatch(actions.makeScanError(err)));

        if (!result.cancelled) {
            console.log('not cancelled :D!', result);
            dispatch(actions.makeScanSuccess(result.uri));
        }
    }
};

const handleScan = async (scanUri, dispatch) => {
    console.log('handle scan :D!', scanUri);
    await firebaseOps
        .uploadScan(scanUri)
        .then(async downloadUrl => {
            console.log(downloadUrl);
            const visionResp = await RNTextDetector.detectFromUri(scanUri);
            console.log('visionResp', visionResp);
        })
        .catch(err => dispatch(actions.makeScanError(err)));
};

export default {
    makeScan,
    handleScan,
};
