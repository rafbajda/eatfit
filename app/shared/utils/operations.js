import { Font } from 'expo';
import actions from '../state/actions';
import firebaseOps from './firebaseOperations';

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

export default {
    dispatchGetFonts,
    getFonts,
    dispatchDoneConfig,
    logout,
};
