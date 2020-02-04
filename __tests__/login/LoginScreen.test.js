import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import LoginScreen from "../../app/screens/login";
import store from "../../app/shared/state/store";
import {Provider} from "react-redux";

describe('LoginScreen snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<Provider store={store}><LoginScreen/></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
