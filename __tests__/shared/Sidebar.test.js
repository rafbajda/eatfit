import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import { Provider } from 'react-redux';
import Sidebar from '../../app/shared/components/Sidebar';
import store from '../../app/shared/state/store';

describe('Sidebar snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Sidebar />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
