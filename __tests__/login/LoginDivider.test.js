import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import LoginDivider from '../../app/screens/login/components/LoginDivider';

describe('LoginDivider snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<LoginDivider />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
