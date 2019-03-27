/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Spinner, Content, Col, Text } from 'native-base';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Divider from 'react-native-divider';
import { SocialIcon } from 'react-native-elements';
import { globalGreen } from '../../shared/constants/Colors';
import { GlobalSpinnerContainer, GlobalContainer, CenterRow } from '../../shared/styles/common';
import LanguagePicker from './components/LanguagePicker';
import { loadConfig } from './state/actions';
import { loadingSelector, languagesSelector } from './state/selectors';
import LoginForm from './components/LoginForm';

class LoginScreen extends React.Component {
    async componentWillMount() {
        const { getConfig } = { ...this.props };
        getConfig();
    }

    render() {
        const { loading, languages } = { ...this.props };
        if (loading) {
            return (
                <GlobalSpinnerContainer>
                    <Spinner color={globalGreen} />
                </GlobalSpinnerContainer>
            );
        }
        return (
            <GlobalContainer>
                <LanguagePicker languages={languages} />
                <LoginForm />
                <Content style={{ marginRight: '10%', marginLeft: '10%', marginTop: 10 }}>
                    <Divider borderColor="#dfe3ee" orientation="center">
                        <Text style={{ color: '#8b9dc3' }}>OR</Text>
                    </Divider>
                </Content>
                <CenterRow style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <Col>
                        <SocialIcon type="facebook" title="facebook" button />
                    </Col>
                    <Col>
                        <SocialIcon type="google-plus-official" title="google" button />
                    </Col>
                </CenterRow>
                <CenterRow style={{ marginTop: 10 }}>
                    <Text
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#8b9dc3',
                        }}
                    >
                        Don't have an account?
                        <Text style={{ color: '#3B5998' }}> Sign up</Text>
                    </Text>
                </CenterRow>
            </GlobalContainer>
        );
    }
}

const mapStateToProps = state => ({
    loading: loadingSelector(state),
    languages: languagesSelector(state),
});

const mapDispatchToProps = dispatch => ({
    getConfig: () => dispatch(loadConfig()),
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'config' }])
)(LoginScreen);
