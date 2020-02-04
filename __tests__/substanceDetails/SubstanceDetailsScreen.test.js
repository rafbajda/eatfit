import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import SubstanceDetailsScreen from "../../app/screens/substanceDetails";
import {Provider} from "react-redux";
import store from "../../app/shared/state/store";

describe('SubstanceDetailsScreen snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<Provider store={store}><SubstanceDetailsScreen /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
