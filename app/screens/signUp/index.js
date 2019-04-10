import React from 'react';
import { connect } from 'react-redux';
import actions from './state/actions';
import globalSelectors from '../../shared/state/selectors';
import SignUpForm from './components/SignUpForm';

const SignUpScreen = props => {
    const { signUp, isAuthLoading } = { ...props };
    return <SignUpForm signUp={signUp} isAuthLoading={isAuthLoading} />;
};

const mapStateToProps = state => ({
    isAuthLoading: globalSelectors.authLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(actions.createAccount(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpScreen);
