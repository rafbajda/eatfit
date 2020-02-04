import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import { Provider } from 'react-redux';
import LoginScreen from '../../app/screens/login';
import store from '../../app/shared/state/store';

describe('LoginScreen snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <LoginScreen />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
