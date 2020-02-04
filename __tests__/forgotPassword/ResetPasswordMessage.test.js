import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ResetPasswordMessage from "../../app/screens/forgotPassword/components/ResetPasswordMessage";

describe('ResetPasswordMessage snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<ResetPasswordMessage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
