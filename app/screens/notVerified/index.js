import React from 'react';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { CenterContainer, mailIconStyle } from './styles/notVerifiedStyles';
import { userSelector } from '../login/state/selectors';
import { logout } from '../../shared/state/actions';
import { sendVerificationEmail, checkVerificationStatus } from './state/actions';
import { authLoadingSelector } from '../../shared/state/selectors';
import VerificationMessage from './components/VerificationMessage';
import RefreshVerificationButton from './components/RefreshVerificationButton';
import NoEmailMessage from './components/NoEmailMessage';
import SendEmailButton from './components/SendEmailButton';
import NotVerifyDivider from './components/NotVerifyDivider';
import LogoutButton from './components/LogoutButton';

const NotVerifiedScreen = props => {
    const { user, signOut, sendEmail, checkVerification, navigation, isAuthLoading } = { ...props };
    return (
        <CenterContainer>
            <Icon type="MaterialIcons" name="email" style={mailIconStyle} />
            <VerificationMessage user={user} />
            <RefreshVerificationButton
                isAuthLoading={isAuthLoading}
                checkVerification={checkVerification}
                nav={navigation}
            />
            <NoEmailMessage />
            <SendEmailButton sendEmail={sendEmail} />
            <NotVerifyDivider />
            <LogoutButton signOut={signOut} />
        </CenterContainer>
    );
};

const mapStateToProps = state => ({
    user: userSelector(state),
    isAuthLoading: authLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    sendEmail: () => dispatch(sendVerificationEmail()),
    signOut: () => dispatch(logout()),
    checkVerification: nav => dispatch(checkVerificationStatus(nav)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotVerifiedScreen);
