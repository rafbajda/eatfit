import React from 'react';
import { connect } from 'react-redux';
import GlobalHeader from '../../shared/components/GlobalHeader';
import {
    CenterContainer,
    LoggedInGlobalContainer
} from '../../shared/styles/common';
import globalSelectors from '../../shared/state/selectors';
import GlobalLoader from '../../shared/components/GlobalLoader';
import actions from './state/actions';
import selectors from './state/selectors';
import ScanButtonElement from './components/ScanButton';
import Legend from './components/Legend';

const HomeScreen = props => {
    const {
        navigation,
        user,
        isAuthLoading,
        isScanLoading,
        scan,
        scanStatusMessage
    } = {
        ...props
    };

    if (isAuthLoading) {
        return <GlobalLoader />;
    }

    return (
        <LoggedInGlobalContainer>
            <GlobalHeader
                nav={navigation}
                avatar={user && user.photoUrl ? user.photoUrl : null}
            />
            <CenterContainer>
                <ScanButtonElement
                    isScanLoading={isScanLoading}
                    scan={scan}
                    scanStatusMessage={scanStatusMessage}
                />
                <Legend />
            </CenterContainer>
        </LoggedInGlobalContainer>
    );
};

const mapStateToProps = state => ({
    user: globalSelectors.userSelector(state),
    isAuthLoading: globalSelectors.authLoadingSelector(state),
    isScanLoading: selectors.scansLoadingSelector(state),
    scanStatusMessage: selectors.scanStatusMessageSelector(state)
});

const mapDispatchToProps = dispatch => ({
    scan: () => dispatch(actions.makeScan())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
