import firebase from '../../../shared/modules/firebase';
import globalFirebaseOps from '../../../shared/utils/firebaseOperations';
import screens from '../../../navigation/screens';
import NavigationService from '../../../navigation/NavigationService';

const signInEmail = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

const checkUserNavigation = setUser => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            globalFirebaseOps.prepareUserToLogIn(user, setUser);
        } else {
            NavigationService.navigate(screens.Login);
        }
    });
};

export default {
    signInEmail,
    checkUserNavigation,
};
