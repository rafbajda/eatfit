import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import { Provider } from 'react-redux';
import ForgotPasswordScreen from '../../app/screens/forgotPassword';
import store from '../../app/shared/state/store';

describe('ForgotPasswordScreen snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <ForgotPasswordScreen />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
