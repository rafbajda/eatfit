/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { globalGreen } from '../../shared/constants/Colors';
import { GlobalSpinnerContainer, GlobalContainer } from '../../shared/styles/common';
import LanguagePicker from './components/LanguagePicker';
import { loadConfig } from './state/actions';
import { loadingSelector, languagesSelector } from './state/selectors';
import LoginForm from './components/LoginForm';
import LoginDivider from './components/LoginDivider';
import SocialLogin from './components/SocialLogin';
import SignUp from './components/SignUp';
import LoginIcon from './components/LoginIcon';

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
                <LoginIcon />
                <LoginForm />
                <LoginDivider />
                <SocialLogin />
                <SignUp />
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
