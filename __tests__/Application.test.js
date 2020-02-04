import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import { Provider } from 'react-redux';
import Application from '../app/index';
import store from '../app/shared/state/store';

describe('Application snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Application />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
