/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Keyboard } from 'react-native';
import { GlobalContainer } from '../../shared/styles/common';
import LanguagePicker from './components/LanguagePicker';
import {
    keyboardShow,
    keyboardHide,
    loginFacebook,
    setUser,
    loginGoogle,
    setLanguage,
    loginEmail,
} from './state/actions';
import {
    languagesSelector,
    keyboardOnScreenSelector,
    pickedLanguageSelector,
} from './state/selectors';
import LoginForm from './components/LoginForm';
import LoginDivider from './components/LoginDivider';
import SocialLogin from './components/SocialLogin';
import SignUp from './components/SignUp';
import LoginIcon from './components/LoginIcon';
import firebaseOperations from '../../shared/utils/firebaseOperations';
import { authLoadingSelector, isNoUserLoggedInSelector } from '../../shared/state/selectors';
import GlobalLoader from '../../shared/components/GlobalLoader';

class LoginScreen extends React.Component {
    componentWillMount() {
        const { navigation, setUserState } = { ...this.props };
        firebaseOperations.checkUserNavigation(navigation, setUserState);
    }

    componentDidMount() {
        const { onShowKeyboard, onHideKeyboard } = { ...this.props };
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
            onShowKeyboard()
        );
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
            onHideKeyboard()
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        const {
            languages,
            isKeyboardVisible,
            navigation,
            isAuthLoading,
            isNoUserLoggedIn,
            loginSocialFacebook,
            loginSocialGoogle,
            setCurrentLanguage,
            currentLanguage,
            login,
        } = {
            ...this.props,
        };
        if (!isNoUserLoggedIn) {
            return <GlobalLoader />;
        }
        return (
            <GlobalContainer>
                <LanguagePicker
                    languages={languages}
                    hidden={isKeyboardVisible}
                    setCurrentLanguage={setCurrentLanguage}
                    currentLanguage={currentLanguage}
                />
                <LoginIcon hidden={isKeyboardVisible} />
                <LoginForm
                    authLoading={isAuthLoading}
                    nav={navigation}
                    login={login}
                    isKeyboardVisible={isKeyboardVisible}
                />
                <LoginDivider />
                <SocialLogin loginFacebook={loginSocialFacebook} loginGoogle={loginSocialGoogle} />
                <SignUp nav={navigation} />
            </GlobalContainer>
        );
    }
}

const mapStateToProps = state => ({
    languages: languagesSelector(state),
    isKeyboardVisible: keyboardOnScreenSelector(state),
    isAuthLoading: authLoadingSelector(state),
    isNoUserLoggedIn: isNoUserLoggedInSelector(state),
    currentLanguage: pickedLanguageSelector(state),
});

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(loginEmail(payload)),
    setCurrentLanguage: language => dispatch(setLanguage(language)),
    setUserState: user => dispatch(setUser(user)),
    loginSocialFacebook: () => dispatch(loginFacebook()),
    loginSocialGoogle: () => dispatch(loginGoogle()),
    onShowKeyboard: () => dispatch(keyboardShow()),
    onHideKeyboard: () => dispatch(keyboardHide()),
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'config' }])
)(LoginScreen);
