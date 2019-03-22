import React from 'react';
import { Provider } from 'react-redux';
import LoginScreen from './app/screens/login';
import store from './app/shared/modules/store';

const App = () => (
    <Provider store={store}>
        <LoginScreen />
    </Provider>
);

export default App;
