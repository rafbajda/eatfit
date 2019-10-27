import firebase from '../../../shared/modules/firebase';
import globalFirebaseOps from '../../../shared/utils/firebaseOperations';

const uploadScan = async (uri, scanId) => {
    const { uid } = await globalFirebaseOps.getAuthCurrentUser();
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(new TypeError('Network request failed'));
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
    });

    const ref = firebase
        .storage()
        .ref(`users/${uid}/scans`)
        .child(scanId);
    const snapshot = await ref.put(blob);
    blob.close();
    return await snapshot.ref.getDownloadURL();
};

const createScanObject = async (scanUri, user) => {
    const scanRef = firebase
        .firestore()
        .collection(`/users/${user.uid}/scans`)
        .doc();
    const scanId = scanRef.id;
    const scanUrl = await uploadScan(scanUri, scanId);
    const scanObject = {
        id: scanId,
        name: `scan_${+new Date()}`,
        scan_url: scanUrl,
        created_at: new Date(),
        user_id: globalFirebaseOps.getAuthCurrentUser().uid
    };
    await scanRef.set(scanObject);
    return scanObject;
};

export default {
    createScanObject
};
