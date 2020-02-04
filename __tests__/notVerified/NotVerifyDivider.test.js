import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import NotVerifyDivider from '../../app/screens/notVerified/components/NotVerifyDivider';

describe('NotVerifyDivider snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<NotVerifyDivider />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
