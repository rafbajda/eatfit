import { Font } from 'expo';
import actions from '../state/actions';
import firebaseOps from './firebaseOperations';
import loginActions from '../../screens/login/state/actions';

const Roboto = require('../../assets/fonts/Roboto.ttf');
const RobotoMedium = require('../../assets/fonts/Roboto_medium.ttf');

const dispatchGetFonts = dispatch => dispatch(actions.getFonts());

const getFonts = dispatch => {
    Font.loadAsync({ Roboto, Roboto_medium: RobotoMedium })
        .then(() => dispatch(actions.getFontsSuccess()))
        .catch(error => dispatch(actions.getFontsError(error)));
};

const dispatchDoneConfig = dispatch => dispatch(actions.loadConfigDone());

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
    const setUser = user => dispatch(loginActions.setUser(user));
    firebaseOps.prepareUserToLogIn(data, setUser);
};

export default {
    dispatchGetFonts,
    getFonts,
    dispatchDoneConfig,
    logout,
    createUserObject,
    refreshUser,
};
