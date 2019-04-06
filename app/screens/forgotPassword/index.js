import React from 'react';
import { connect } from 'react-redux';
import { authLoadingSelector } from '../../shared/state/selectors';
import { sendResetPasswordMail } from './state/actions';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import { CenterContainer } from '../../shared/styles/common';

const ForgotPasswordScreen = props => {
    const { isAuthLoading, resetPassword, navigation } = { ...props };
    return (
        <CenterContainer>
            {/* TODO: add this component after managing logo */}
            {/* <ResetPasswordMessage /> */}
            <ForgotPasswordForm
                isAuthLoading={isAuthLoading}
                resetPassword={resetPassword}
                nav={navigation}
            />
        </CenterContainer>
    );
};

const mapStateToProps = state => ({
    isAuthLoading: authLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    resetPassword: email => dispatch(sendResetPasswordMail(email)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPasswordScreen);
