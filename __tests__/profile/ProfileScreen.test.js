import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ProfileScreen from "../../app/screens/profile";
import {Provider} from "react-redux";
import store from "../../app/shared/state/store";

const languagesMock = [
    {
        id: 'pl',
        label: 'polski'
    },
    {
        id: 'en-US',
        label: 'english'
    }
];

describe('ProfileScreen snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<Provider store={store}><ProfileScreen languages={languagesMock}/></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
