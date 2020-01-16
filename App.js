import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import './app/shared/modules/i18n';
import store from './app/shared/state/store';
import Application from './app/index';

const App = () => (
    <Suspense fallback={null}>
        <Root>
            <Provider store={store}>
                <Application />
            </Provider>
        </Root>
    </Suspense>
);

export default App;
