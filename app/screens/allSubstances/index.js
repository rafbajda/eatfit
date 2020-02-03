import React from 'react';
import { connect } from 'react-redux';
import SubstancesList from '../scanDetails/components/SubstancesList';
import actions from '../scanDetails/state/actions';
import selectors from './state/selectors';

const AllSubstancesScreen = props => {
    const { substances, goToSubstanceDetails } = props;
    console.log('subs', substances);
    return (
        <SubstancesList
            substances={substances}
            goToSubstanceDetails={goToSubstanceDetails}
        ></SubstancesList>
    );
};

const mapStateToProps = state => ({
    substances: selectors.allSubstancesSelector(state)
});

const mapDispatchToProps = dispatch => ({
    goToSubstanceDetails: substance =>
        dispatch(actions.setSubstanceDetails(substance))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllSubstancesScreen);
