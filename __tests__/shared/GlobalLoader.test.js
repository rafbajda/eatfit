import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import GlobalLoader from "../../app/shared/components/GlobalLoader";
import {Provider} from "react-redux";
import store from "../../app/shared/state/store";

describe('GlobalLoader snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<Provider store={store}><GlobalLoader /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
