import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import store from './app/shared/modules/store';
import LoginScreen from './app/screens/login';
import RootNavigator from './app/navigation/RootNavigator';

const AppContainer = createAppContainer(RootNavigator);

const App = () => (
    <Provider store={store}>
        {/* <LoginScreen /> */}
        <AppContainer />
    </Provider>
);

export default App;
