import React from 'react';
import { connect } from 'react-redux';
import GlobalHeader from '../../shared/components/GlobalHeader';
import { GlobalContainer } from '../../shared/styles/common';
import globalSelectors from '../../shared/state/selectors';
import GlobalLoader from '../../shared/components/GlobalLoader';
import actions from './state/actions';
import selectors from './state/selectors';
import ScanButtonElement from './components/ScanButton';

// TODO: set scanloading to false when making scan is aborted
const HomeScreen = props => {
    const { navigation, user, isAuthLoading, isScanLoading, scan } = { ...props };

    if (isAuthLoading) {
        return <GlobalLoader />;
    }

    return (
        <GlobalContainer>
            <GlobalHeader nav={navigation} avatar={user && user.photoUrl ? user.photoUrl : null} />
            <ScanButtonElement isScanLoading={isScanLoading} scan={scan} />
        </GlobalContainer>
    );
};

const mapStateToProps = state => ({
    user: globalSelectors.userSelector(state),
    isAuthLoading: globalSelectors.authLoadingSelector(state),
    isScanLoading: selectors.scansLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    scan: () => dispatch(actions.makeScan()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
