import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import GlobalLoader from "../../app/shared/components/GlobalLoader";

describe('GlobalLoader snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<GlobalLoader />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
