import React from 'react';
import { connect } from 'react-redux';
import globalSelectors from '../../shared/state/selectors';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import { CenterContainer } from '../../shared/styles/common';
import actions from './state/actions';

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
    isAuthLoading: globalSelectors.authLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    resetPassword: email => dispatch(actions.sendResetPasswordMail(email)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPasswordScreen);
