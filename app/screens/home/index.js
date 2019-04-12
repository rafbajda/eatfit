import React from 'react';
import { Text } from 'native-base';
import { connect } from 'react-redux';
import GlobalHeader from '../../shared/components/GlobalHeader';
import { GlobalContainer } from '../../shared/styles/common';
import globalSelectors from '../../shared/state/selectors';
import GlobalLoader from '../../shared/components/GlobalLoader';

const HomeScreen = props => {
    const { navigation, user, isAuthLoading } = { ...props };

    if (isAuthLoading) {
        return <GlobalLoader />;
    }
    return (
        <GlobalContainer>
            <GlobalHeader nav={navigation} avatar={user && user.photoUrl ? user.photoUrl : null} />
            <Text>abecadlo</Text>
        </GlobalContainer>
    );
};

const mapStateToProps = state => ({
    user: globalSelectors.userSelector(state),
    isAuthLoading: globalSelectors.authLoadingSelector(state),
});

export default connect(
    mapStateToProps,
    null
)(HomeScreen);
