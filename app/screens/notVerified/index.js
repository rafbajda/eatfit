import React from 'react';
import { UIActivityIndicator } from 'react-native-indicators';
import { Icon, Text, Button, Row } from 'native-base';
import { connect } from 'react-redux';
import Divider from 'react-native-divider';
import { CenterContainer, mailIconStyle } from './styles/notVerifiedStyles';
import {
    lightGrey,
    deepGrey,
    mediumGrey,
    globalGreen,
    globalWhite,
} from '../../shared/constants/Colors';
import { userSelector } from '../login/state/selectors';
import { logout } from '../../shared/state/actions';
import { sendVerificationEmail, checkVerificationStatus } from './state/actions';
import { authLoadingSelector } from '../../shared/state/selectors';

const NotVerifiedScreen = props => {
    const { user, signOut, sendEmail, checkVerification, navigation, isAuthLoading } = { ...props };
    return (
        <CenterContainer>
            <Icon type="MaterialIcons" name="email" style={mailIconStyle} />
            <Text style={{ fontSize: 30, color: deepGrey }}>Account is not verified!</Text>
            <Text style={{ fontSize: 15, color: mediumGrey }}>
                Check {user && user.email ? user.email : 'email'} and click on verification link.
            </Text>
            <Row
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: 'auto',
                    paddingBottom: 12,
                    paddingTop: 12,
                }}
            >
                <Button
                    onPress={() => checkVerification(navigation)}
                    style={{
                        backgroundColor: globalGreen,
                        fontWeight: 'bold',
                        height: 70,
                        width: 300,
                        justifyContent: 'center',
                    }}
                    disabled={isAuthLoading}
                >
                    {isAuthLoading ? (
                        <UIActivityIndicator size={30} color={globalWhite} />
                    ) : (
                        <Text style={{ fontSize: 17 }}>Refresh verification status</Text>
                    )}
                </Button>
            </Row>
            <Text style={{ paddingTop: 40, fontSize: 24, color: mediumGrey }}>
                did not receive any email?
            </Text>
            <Row
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: 'auto',
                    paddingBottom: 12,
                    paddingTop: 12,
                }}
            >
                <Button
                    onPress={() => sendEmail()}
                    rounded
                    style={{
                        backgroundColor: globalGreen,
                        fontWeight: 'bold',
                        height: 50,
                        width: 280,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ fontSize: 16 }}>Send another email</Text>
                </Button>
            </Row>
            <Divider borderColor={lightGrey} orientation="center">
                <Text style={{ fontSize: 20, color: deepGrey }}>OR</Text>
            </Divider>
            <Row
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: 'auto',
                    paddingTop: 12,
                }}
            >
                <Button
                    onPress={() => signOut()}
                    rounded
                    style={{
                        backgroundColor: globalGreen,
                        fontWeight: 'bold',
                        height: 50,
                        width: 280,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ fontSize: 16 }}>Log in to another account</Text>
                </Button>
            </Row>
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
