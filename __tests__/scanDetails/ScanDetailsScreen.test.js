import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import { Provider } from 'react-redux';
import ScanDetailsScreen from '../../app/screens/scanDetails';
import store from '../../app/shared/state/store';

const SCAN_MOCK = {
    scanUrl: 'urlMock',
    substances: [],
    score: 7.12
};

describe('ScanDetailsScreen snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <ScanDetailsScreen scan={SCAN_MOCK} />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
