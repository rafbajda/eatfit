import React from 'react';
import { connect } from 'react-redux';
import { createAccount } from './state/actions';
import { authLoadingSelector } from '../../shared/state/selectors';
import SignUpForm from './components/SignUpForm';

const SignUpScreen = props => {
    const { signUp, isAuthLoading } = { ...props };
    return <SignUpForm signUp={signUp} isAuthLoading={isAuthLoading} />;
};

const mapStateToProps = state => ({
    isAuthLoading: authLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(createAccount(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpScreen);
