import React from 'react';
import { Provider } from 'react-redux';
import store from './app/shared/state/store';
import Application from './app/index';

const App = () => (
    <Provider store={store}>
        <Application />
    </Provider>
);

export default App;
