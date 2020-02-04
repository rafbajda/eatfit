import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import LoginIcon from "../../app/screens/login/components/LoginIcon";

describe('LoginIcon snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<LoginIcon />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
