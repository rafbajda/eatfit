import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ProfileImage from '../../app/screens/profile/components/ProfileImage';

describe('ProfileImage snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<ProfileImage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
