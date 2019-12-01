import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import selectors from './state/selectors'
import ScanList from "./components/ScanList";
import actions from './state/actions';

const ScansHistoryScreen = props => {
    const { scans, goToScanDetails } = props;
    return (
        <Container>
            <ScanList scans={scans} action={goToScanDetails}></ScanList>
        </Container>
    );
};

const mapStateToProps = state => ({
    scans: selectors.allScansSelector(state)
});

const mapDispatchToProps = dispatch => ({
    goToScanDetails: scan =>
        dispatch(actions.openPastScan(scan))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScansHistoryScreen);
