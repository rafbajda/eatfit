import * as Font from 'expo-font';
import * as Localization from 'expo-localization';
import actions from '../state/actions';
import firebaseOps from './firebaseOperations';
import firebase from '../modules/firebase';
import hps from './helpers';
import { Keyboard } from 'react-native';
import I18n from 'i18n-js';

let keyboardDidShowListener = null;
let keyboardDidHideListener = null;

const updateLocalLanguage = newLocale => (I18n.locale = newLocale);

const getCurrentLanguage = dispatch => {
    const { locale } = Localization;
    const actionToDispatch = locale
        ? actions.getCurrentLanguageSuccess(locale)
        : actions.getCurrentLanguageError('no locale found');
    dispatch(actionToDispatch);
};

const getFonts = dispatch => {
    Font.loadAsync({
        Roboto: require('../../assets/fonts/Roboto.ttf'),
        Roboto_medium: require('../../assets/fonts/Roboto_medium.ttf')
    })
        .then(() => dispatch(actions.getFontsSuccess()))
        .catch(error => dispatch(actions.getFontsError(error)));
};

const logout = dispatch => {
    firebaseOps
        .signOut()
        .then(() => dispatch(actions.logoutSuccess()))
        .catch(error => dispatch(actions.logoutError(error)));
};

const createUserObject = (data, dispatch) => {
    firebaseOps
        .createUserInstance(data)
        .then(() => {
            dispatch(actions.createUserObjectSuccess(data.user));
        })
        .catch(error => dispatch(actions.createUserObjectError(error)));
};

const refreshUser = (data, dispatch) => {
    const setUser = user => dispatch(actions.setUser(user));
    firebaseOps.prepareUserToLogIn(data, setUser);
};

const getAllSubstances = dispatch => {
    firebase
        .firestore()
        .collection(`/substances`)
        .get()
        .then(querySnap => {
            const substances = querySnap.docs.map(doc =>
                hps.normalizeKeysToCamelCase(doc.data())
            );
            dispatch(actions.getAllSubstancesSuccess(substances));
        })
        .catch(err => dispatch(actions.getAllSubstancesError(err)));
};

const setUpKeyboardListeners = dispatch => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
        dispatch(actions.keyboardShow())
    );
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
        dispatch(actions.keyboardHide())
    );
};

const removeKeyboardListeners = () => {
    keyboardDidShowListener.remove();
    keyboardDidHideListener.remove();
};

export default {
    getFonts,
    logout,
    createUserObject,
    refreshUser,
    getAllSubstances,
    getCurrentLanguage,
    setUpKeyboardListeners,
    removeKeyboardListeners,
    updateLocalLanguage
};
