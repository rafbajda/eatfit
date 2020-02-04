import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import SignUp from '../../app/screens/login/components/SignUp';

describe('SignUp snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<SignUp />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
