import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import SignUpForm from '../../app/screens/signUp/components/SignUpForm';

describe('SignUpForm snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<SignUpForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
