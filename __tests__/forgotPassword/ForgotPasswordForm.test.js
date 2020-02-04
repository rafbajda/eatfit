import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ForgotPasswordForm from "../../app/screens/forgotPassword/components/ForgotPasswordForm";

describe('ForgotPasswordForm snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<ForgotPasswordForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
