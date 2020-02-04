import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import SocialLogin from "../../app/screens/login/components/SocialLogin";

describe('SocialLogin snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<SocialLogin />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
