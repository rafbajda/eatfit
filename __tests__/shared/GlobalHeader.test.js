import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import GlobalHeader from "../../app/shared/components/GlobalHeader";

describe('GlobalHeader snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<GlobalHeader />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
