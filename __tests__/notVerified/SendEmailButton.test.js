import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import SendEmailButton from "../../app/screens/notVerified/components/SendEmailButton";

describe('SendEmailButton snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<SendEmailButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
