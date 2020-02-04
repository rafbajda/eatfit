import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import NoEmailMessage from '../../app/screens/notVerified/components/NoEmailMessage';

describe('NoEmailMessage snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<NoEmailMessage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
