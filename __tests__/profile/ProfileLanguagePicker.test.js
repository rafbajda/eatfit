import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ProfileLanguagePicker from "../../app/screens/profile/components/ProfileLanguagePicker";

describe('ProfileLanguagePicker snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<ProfileLanguagePicker />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
