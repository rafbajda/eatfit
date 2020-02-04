import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import RefreshVerificationButton from '../../app/screens/notVerified/components/RefreshVerificationButton';

describe('RefreshVerificationButton snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<RefreshVerificationButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
