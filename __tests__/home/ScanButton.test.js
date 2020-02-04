import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ScanButtonElement from "../../app/screens/home/components/ScanButton";

describe('ScanButton snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<ScanButtonElement />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
