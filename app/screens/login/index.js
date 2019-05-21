import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { GlobalContainer } from '../../shared/styles/common';
import LanguagePicker from './components/LanguagePicker';
import actions from './state/actions';
import globalActions from '../../shared/state/actions';
import loginSelectors from './state/selectors';
import LoginForm from './components/LoginForm';
import LoginDivider from './components/LoginDivider';
import SocialLogin from './components/SocialLogin';
import SignUp from './components/SignUp';
import LoginIcon from './components/LoginIcon';
import firebaseOps from '../../shared/utils/firebaseOperations';
import globalSelectors from '../../shared/state/selectors';
import GlobalLoader from '../../shared/components/GlobalLoader';
import NavigationService from '../../navigation/NavigationService';

class LoginScreen extends React.Component {
    componentWillMount() {
        const { navigation, setUserState } = { ...this.props };
        NavigationService.setNavigator(navigation);
        firebaseOps.checkUserNavigation(setUserState);
    }

    componentDidMount() {
        const { setUpKeyboardListeners } = { ...this.props };
        setUpKeyboardListeners();
    }

    componentWillUnmount() {
        const { removeKeyboardListeners } = { ...this.props };
        removeKeyboardListeners();
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
    languages: loginSelectors.languagesSelector(state),
    isKeyboardVisible: loginSelectors.keyboardOnScreenSelector(state),
    isAuthLoading: globalSelectors.authLoadingSelector(state),
    isNoUserLoggedIn: globalSelectors.isNoUserLoggedInSelector(state),
    currentLanguage: loginSelectors.pickedLanguageSelector(state),
});

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(actions.loginEmail(payload)),
    setCurrentLanguage: language => dispatch(actions.setLanguage(language)),
    setUserState: user => dispatch(globalActions.setUser(user)),
    loginSocialFacebook: () => dispatch(actions.loginFacebook()),
    loginSocialGoogle: () => dispatch(actions.loginGoogle()),
    setUpKeyboardListeners: () => dispatch(actions.setUpKeyboardListeners()),
    removeKeyboardListeners: () => dispatch(actions.removeKeyboardListeners()),
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'config' }])
)(LoginScreen);
