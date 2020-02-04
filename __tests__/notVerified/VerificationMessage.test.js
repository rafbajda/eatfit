import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import VerificationMessage from "../../app/screens/notVerified/components/VerificationMessage";

describe('VerificationMessage snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<VerificationMessage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
