import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import SubstancesList from '../../app/screens/scanDetails/components/SubstancesList';

describe('SubstancesList snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<SubstancesList />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
