import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ScanInformationsRow from '../../app/screens/scanDetails/components/ScanInformationsRow';

describe('ScanInformationsRow snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<ScanInformationsRow />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
