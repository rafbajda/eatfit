import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import SubstanceDescription from '../../app/screens/substanceDetails/components/SubstanceDescription';

describe('SubstanceDescription snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<SubstanceDescription />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
