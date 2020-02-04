import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import LanguagePicker from '../../app/screens/login/components/LanguagePicker';

describe('LanguagePicker snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<LanguagePicker />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
