import { Toast } from 'native-base';
import firebase from '../../../shared/modules/firebase';
import globalFirebaseOps from '../../../shared/utils/firebaseOperations';
import { UserMismatchingToast } from '../../../shared/constants/toasts';

const uploadAvatar = async (uri, userId) => {
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
        .ref(`users/${userId}/avatars`)
        .child(`avatar_${+new Date()}`);
    const snapshot = await ref.put(blob);

    blob.close();
    const downloadUrl = await snapshot.ref.getDownloadURL();

    return downloadUrl;
};

const updateUser = (uid, data) =>
    firebase
        .firestore()
        .doc(`/users/${uid}`)
        .set(data);

const reloadUser = (uid, setUser, updateUserSuccess) => {
    globalFirebaseOps
        .getUserById(uid)
        .then(doc => {
            if (doc.exists) {
                const userObject = doc.data();
                setUser(userObject);
                updateUserSuccess();
            }
        })
        .catch(() => {
            Toast.show(UserMismatchingToast);
        });
};

export default {
    uploadAvatar,
    updateUser,
    reloadUser
};
