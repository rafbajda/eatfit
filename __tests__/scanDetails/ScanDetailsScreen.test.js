import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ScanDetailsScreen from "../../app/screens/scanDetails";
import {Provider} from "react-redux";
import store from "../../app/shared/state/store";

describe('ScanDetailsScreen snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<Provider store={store}><ScanDetailsScreen /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
