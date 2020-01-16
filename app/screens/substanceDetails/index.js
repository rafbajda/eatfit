import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Row } from 'native-base';
import selectors from './state/selectors';
import SubstanceInformationsRow from './components/SubstanceInformationsRow';
import SubstanceDescription from './components/SubstanceDescription';

const SubstanceDetailsScreen = props => {
    const { substance } = props;
    return (
        <Container>
            <Grid>
                <SubstanceInformationsRow
                    imageUrl={substance.imageUrl}
                    substanceName={substance.name}
                    score={substance.score}
                />
                <Row>
                    <SubstanceDescription
                        substanceDescription={substance.description}
                    />
                </Row>
            </Grid>
        </Container>
    );
};

const mapStateToProps = state => ({
    substance: selectors.getLatestSubstance(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubstanceDetailsScreen);
