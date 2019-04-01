import React from 'react';
import { Text } from 'native-base';
import GlobalHeader from '../../shared/components/GlobalHeader';
import { GlobalContainer } from '../../shared/styles/common';

class HomeScreen extends React.Component {
    render() {
        const { navigation } = { ...this.props };
        return (
            <GlobalContainer>
                <GlobalHeader nav={navigation} />
                <Text>abecadlo</Text>
            </GlobalContainer>
        );
    }
}

export default HomeScreen;
