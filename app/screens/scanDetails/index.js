import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Row } from 'native-base';
import actions from './state/actions';
import selectors from './state/selectors';
import ScanInformationsRow from './components/ScanInformationsRow';
import SubstancesList from './components/SubstancesList';

const ScanDetailsScreen = props => {
    const { goToSubstanceDetails, scan } = { ...props };

    return (
        <Container>
            <Grid>
                {scan ? <ScanInformationsRow
                    scanUrl={scan.scanUrl}
                    scanScore={scan.score}
                /> : null}
                <Row>
                    {scan ? <SubstancesList
                        substances={scan.substances}
                        goToSubstanceDetails={goToSubstanceDetails}
                    /> : null}
                </Row>
            </Grid>
        </Container>
    );
};

const mapStateToProps = state => ({
    scan: selectors.latestScanSelector(state)
});

const mapDispatchToProps = dispatch => ({
    goToSubstanceDetails: substance =>
        dispatch(actions.setSubstanceDetails(substance))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScanDetailsScreen);
