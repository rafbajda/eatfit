import React from 'react';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import styles from './styles/notVerifiedStyles';
import globalActions from '../../shared/state/actions';
import actions from './state/actions';
import globalSelectors from '../../shared/state/selectors';
import VerificationMessage from './components/VerificationMessage';
import RefreshVerificationButton from './components/RefreshVerificationButton';
import NoEmailMessage from './components/NoEmailMessage';
import SendEmailButton from './components/SendEmailButton';
import NotVerifyDivider from './components/NotVerifyDivider';
import LogoutButton from './components/LogoutButton';
import { CenterContainer } from '../../shared/styles/common';

const NotVerifiedScreen = props => {
    const {
        user,
        signOut,
        sendEmail,
        checkVerification,
        isAuthLoading,
        mailIconStyle
    } = {
        ...props,
        ...styles
    };
    return (
        <CenterContainer>
            <Icon type="MaterialIcons" name="email" style={mailIconStyle} />
            <VerificationMessage user={user} />
            <RefreshVerificationButton
                isAuthLoading={isAuthLoading}
                checkVerification={checkVerification}
            />
            <NoEmailMessage />
            <SendEmailButton sendEmail={sendEmail} />
            <NotVerifyDivider />
            <LogoutButton signOut={signOut} />
        </CenterContainer>
    );
};

const mapStateToProps = state => ({
    user: globalSelectors.userSelector(state),
    isAuthLoading: globalSelectors.authLoadingSelector(state)
});

const mapDispatchToProps = dispatch => ({
    sendEmail: () => dispatch(actions.sendVerificationEmail()),
    signOut: () => dispatch(globalActions.logout()),
    checkVerification: () => dispatch(actions.checkVerificationStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotVerifiedScreen);
