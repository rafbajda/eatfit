import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore, firestoreReducer } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import initialState from '../constants/State';
import loginReducer from '../../screens/login/state/reducer';
import firebaseConfig from '../../../Firebase';
import configMiddleware from '../../screens/login/state/middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = null; // eslint-disable-line

const combinedReducer = combineReducers({
    config: loginReducer,
    firestore: firestoreReducer
});

if (__DEV__) {    // eslint-disable-line
  const devToolsEnhancer = require('remote-redux-devtools'); // eslint-disable-line
    store = createStore(
        combinedReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
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
                configMiddleware,
                thunk.withExtraArgument({ getFirebase, getFirestore })
            ),
            reduxFirestore(firebaseConfig),
            reactReduxFirebase(firebaseConfig)
        )
    );
}

export default store;
