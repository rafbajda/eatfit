import React from 'react';
import { connect } from 'react-redux';
import globalSelectors from '../../shared/state/selectors';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import { CenterContainer } from '../../shared/styles/common';
import actions from './state/actions';
import ResetPasswordMessage from './components/ResetPasswordMessage';
const ForgotPasswordScreen = props => {
    const { isAuthLoading, resetPassword, isKeyboardVisible } = { ...props };
    const message = <ResetPasswordMessage />;
    return (
        <CenterContainer>
            {isKeyboardVisible ? null : message}
            <ForgotPasswordForm
                isAuthLoading={isAuthLoading}
                resetPassword={resetPassword}
            />
        </CenterContainer>
    );
};

const mapStateToProps = state => ({
    isAuthLoading: globalSelectors.authLoadingSelector(state),
    isKeyboardVisible: globalSelectors.keyboardOnScreenSelector(state)
});

const mapDispatchToProps = dispatch => ({
    resetPassword: email => dispatch(actions.sendResetPasswordMail(email))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPasswordScreen);
