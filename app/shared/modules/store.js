import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../../screens/login/state/reducer';
import initialState from '../constants/State';

let store = null; // eslint-disable-line

const combinedReducer = combineReducers({
    loginReducer,
});

if (__DEV__) {    // eslint-disable-line
  const devToolsEnhancer = require('remote-redux-devtools'); // eslint-disable-line
    store = createStore(
        combinedReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            devToolsEnhancer.default({
                realtime: true,
                hostname: 'localhost',
                port: 8000,
                suppressConnectErrors: false,
            })
        )
    );
} else {
    store = createStore(combinedReducer, initialState, applyMiddleware(thunk));
}

export default store;
