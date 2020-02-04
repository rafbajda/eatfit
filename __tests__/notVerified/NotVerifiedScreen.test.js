import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import { Provider } from 'react-redux';
import NotVerifiedScreen from '../../app/screens/notVerified';
import store from '../../app/shared/state/store';

describe('NotVerifiedScreen snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <NotVerifiedScreen />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
