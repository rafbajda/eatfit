import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import LogoutButton from '../../app/screens/notVerified/components/LogoutButton';

describe('LogoutButton snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<LogoutButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
