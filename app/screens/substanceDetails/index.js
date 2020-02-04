import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Row } from 'native-base';
import selectors from './state/selectors';
import SubstanceInformationsRow from './components/SubstanceInformationsRow';
import SubstanceDescription from './components/SubstanceDescription';
import globalHps from '../../shared/utils/helpers';
import * as Localization from 'expo-localization';

const SubstanceDetailsScreen = props => {
    const { substance, locale } = { ...props, ...Localization };
    const { name, description } = globalHps.getNameDescriptionByLocale(
        substance,
        locale
    );
    return (
        <Container>
            <Grid>
                {substance ? <SubstanceInformationsRow
                    imageUrl={substance.imageUrl}
                    substanceName={name}
                    score={substance.score}
                /> : null}
                <Row>
                    <SubstanceDescription substanceDescription={description} />
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
