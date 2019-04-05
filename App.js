import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import store from './app/shared/state/store';
import Application from './app/index';

const App = () => (
    <Root>
        <Provider store={store}>
            <Application />
        </Provider>
    </Root>
);

export default App;
