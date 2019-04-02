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
import initialState from '../constants/State';
import globalMiddlewares from './middleware';
import authReducer from '../../screens/login/state/reducer';
import signUpMiddleware from '../../screens/signUp/state/middleware';

let store = null; // eslint-disable-line
const navReducer = createNavigationReducer(RootNavigator);
const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav);

const combinedReducer = combineReducers({
    auth: authReducer,
    config: globalReducers.configReducer,
    nav: navReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

if (__DEV__) {
    // eslint-disable-line
  const devToolsEnhancer = require('remote-redux-devtools'); // eslint-disable-line
    store = createStore(
        combinedReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                navMiddleware,
                globalMiddlewares.configMiddleware,
                signUpMiddleware,
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
                navMiddleware,
                globalMiddlewares.configMiddleware,
                signUpMiddleware,
                thunk.withExtraArgument({ getFirebase, getFirestore })
            ),
            reduxFirestore(firebaseConfig),
            reactReduxFirebase(firebaseConfig)
        )
    );
}

export default store;
