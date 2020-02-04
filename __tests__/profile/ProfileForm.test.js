import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ProfileForm from "../../app/screens/profile/components/ProfileForm";

describe('ProfileForm snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<ProfileForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
