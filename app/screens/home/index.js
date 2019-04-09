import React from 'react';
import { Text } from 'native-base';
import GlobalHeader from '../../shared/components/GlobalHeader';
import { GlobalContainer } from '../../shared/styles/common';

const HomeScreen = props => {
    const { navigation } = { ...props };
    return (
        <GlobalContainer>
            <GlobalHeader nav={navigation} />
            <Text>abecadlo</Text>
        </GlobalContainer>
    );
};

export default HomeScreen;
