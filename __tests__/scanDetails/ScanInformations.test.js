import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ScanInformations from '../../app/screens/scanDetails/components/ScanInformations';

describe('ScanImage snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<ScanInformations />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
