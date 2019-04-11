import React from 'react';
import { Text } from 'native-base';
import { connect } from 'react-redux';
import GlobalHeader from '../../shared/components/GlobalHeader';
import { GlobalContainer } from '../../shared/styles/common';
import globalSelectors from '../../shared/state/selectors';

const HomeScreen = props => {
    const { navigation, user } = { ...props };
    return (
        <GlobalContainer>
            <GlobalHeader nav={navigation} avatar={user.photoUrl} />
            <Text>abecadlo</Text>
        </GlobalContainer>
    );
};

const mapStateToProps = state => ({
    user: globalSelectors.userSelector(state),
});

export default connect(
    mapStateToProps,
    null
)(HomeScreen);
