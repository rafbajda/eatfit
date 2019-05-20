/* global __DEV__ */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore, firestoreReducer } from 'redux-firestore';
import { getFirebase, reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import globalReducers from './reducer';
import firebaseConfig from '../modules/firebase';
import RootNavigator from '../../navigation/RootNavigator';
import initialState from '../constants/state';
import globalMiddlewares from './middleware';
import signUpMiddleware from '../../screens/signUp/state/middleware';
import verificationMiddleware from '../../screens/notVerified/state/middleware';
import forgotPasswordMiddleware from '../../screens/forgotPassword/state/middleware';
import loginMiddleware from '../../screens/login/state/middleware';
import profileMiddleware from '../../screens/profile/state/middleware';
import profileReducer from '../../screens/profile/state/reducer';
import homeMiddleware from '../../screens/home/state/middleware';
import substanceDetailsMiddleware from '../../screens/scanDetails/state/middleware';

let store = null; // eslint-disable-line
const navReducer = createNavigationReducer(RootNavigator);
const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav);

const combinedReducer = combineReducers({
    auth: globalReducers.authReducer,
    config: globalReducers.configReducer,
    nav: navReducer,
    profile: profileReducer,
    scans: globalReducers.scansReducer,
    substances: globalReducers.substancesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

if (__DEV__) {
  const devToolsEnhancer = require('remote-redux-devtools'); // eslint-disable-line
    store = createStore(
        combinedReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                profileMiddleware,
                navMiddleware,
                globalMiddlewares.configMiddleware,
                globalMiddlewares.authMiddleware,
                signUpMiddleware,
                verificationMiddleware,
                forgotPasswordMiddleware,
                loginMiddleware,
                homeMiddleware,
                substanceDetailsMiddleware,
                thunk.withExtraArgument({ getFirebase, getFirestore })
            ),
            reactReduxFirebase(firebaseConfig),
            reduxFirestore(firebaseConfig)
        )
    );
} else {
    store = createStore(
        combinedReducer,
        initialState,
        compose(
            applyMiddleware(
                profileMiddleware,
                navMiddleware,
                globalMiddlewares.configMiddleware,
                globalMiddlewares.authMiddleware,
                signUpMiddleware,
                verificationMiddleware,
                forgotPasswordMiddleware,
                loginMiddleware,
                homeMiddleware,
                substanceDetailsMiddleware,
                thunk.withExtraArgument({ getFirebase, getFirestore })
            ),
            reduxFirestore(firebaseConfig),
            reactReduxFirebase(firebaseConfig)
        )
    );
}

export default store;
