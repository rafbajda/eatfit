import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import SubstanceImage from "../../app/screens/substanceDetails/components/SubstanceImage";

describe('SubstanceImage snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<SubstanceImage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
