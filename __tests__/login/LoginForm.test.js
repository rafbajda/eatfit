import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import LoginForm from '../../app/screens/login/components/LoginForm';

describe('LoginForm snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<LoginForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
