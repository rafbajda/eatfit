/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { Keyboard } from 'react-native';
import { globalGreen } from '../../shared/constants/Colors';
import { GlobalSpinnerContainer, GlobalContainer } from '../../shared/styles/common';
import LanguagePicker from './components/LanguagePicker';
import { loginSuccess, keyboardShow, keyboardHide } from './state/actions';
import { languagesSelector, keyboardOnScreenSelector } from './state/selectors';
import LoginForm from './components/LoginForm';
import LoginDivider from './components/LoginDivider';
import SocialLogin from './components/SocialLogin';
import SignUp from './components/SignUp';
import LoginIcon from './components/LoginIcon';
import firebaseOperations from '../../shared/utils/firebaseOperations';
import { loadingSelector } from '../../shared/state/selectors';

class LoginScreen extends React.Component {
    componentWillMount() {
        const { navigation, setUser } = { ...this.props };
        firebaseOperations.checkUserNavigation(navigation, setUser);
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
        const { loading, languages, firebase, isKeyboardVisible, navigation } = { ...this.props };
        if (loading || firebase.isInitializing) {
            return (
                <GlobalSpinnerContainer>
                    <Spinner color={globalGreen} />
                </GlobalSpinnerContainer>
            );
        }
        return (
            <GlobalContainer>
                <LanguagePicker languages={languages} hidden={isKeyboardVisible} />
                <LoginIcon hidden={isKeyboardVisible} />
                <LoginForm isKeyboardVisible />
                <LoginDivider />
                <SocialLogin />
                <SignUp nav={navigation} />
            </GlobalContainer>
        );
    }
}

const mapStateToProps = state => ({
    loading: loadingSelector(state),
    languages: languagesSelector(state),
    isKeyboardVisible: keyboardOnScreenSelector(state),
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(loginSuccess(user)),
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
