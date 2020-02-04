import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ScanList from "../../app/screens/scansHistory/components/ScanList";

describe('ScanList snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<ScanList />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
