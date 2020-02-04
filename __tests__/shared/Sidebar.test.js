import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import Sidebar from "../../app/shared/components/Sidebar";

describe('GlobalLoader snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<Sidebar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
