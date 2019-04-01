import firebase from '../modules/firebase';
import screens from '../../navigation/screens';

const checkUserNavigation = (nav, setUser) => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            setUser(user);
            nav.navigate(screens.Home);
        } else {
            nav.navigate(screens.Login);
        }
    });
};

const signOut = () => {
    return firebase.auth().signOut();
};

export default {
    checkUserNavigation,
    signOut,
};
