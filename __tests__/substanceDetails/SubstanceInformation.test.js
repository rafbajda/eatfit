import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import SubstanceInformation from '../../app/screens/substanceDetails/components/SubstanceInformation';

describe('SubstanceInformation snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<SubstanceInformation />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
