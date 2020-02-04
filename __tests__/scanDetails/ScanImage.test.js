import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ScanImage from "../../app/screens/scanDetails/components/ScanImage";

describe('ScanImage snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<ScanImage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
