import * as Font from 'expo-font';
import actions from '../state/actions';
import firebaseOps from './firebaseOperations';

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

export default {
    getFonts,
    logout,
    createUserObject,
    refreshUser
};
