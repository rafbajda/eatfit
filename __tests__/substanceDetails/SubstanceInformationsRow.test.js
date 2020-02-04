import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import SubstanceInformationsRow from "../../app/screens/substanceDetails/components/SubstanceInformationsRow";

describe('SubstanceInformationsRow snapshot', () => {
    jest.useFakeTimers();
    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it('renders component', async () => {
        const tree = renderer.create(<SubstanceInformationsRow />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
