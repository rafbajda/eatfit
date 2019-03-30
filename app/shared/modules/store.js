import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore, firestoreReducer } from 'redux-firestore';
import { getFirebase, reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import initialState from '../constants/State';
import loginReducer from '../../screens/login/state/reducer';
import firebaseConfig from './firebase';
import configMiddleware from '../../screens/login/state/middleware';
import RootNavigator from '../../navigation/RootNavigator';

let store = null; // eslint-disable-line
const navReducer = createNavigationReducer(RootNavigator);
const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav);

const combinedReducer = combineReducers({
    config: loginReducer,
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
                configMiddleware,
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
                configMiddleware,
                thunk.withExtraArgument({ getFirebase, getFirestore })
            ),
            reduxFirestore(firebaseConfig),
            reactReduxFirebase(firebaseConfig)
        )
    );
}

export default store;
