import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signUp';
import { globalGreen, globalWhite } from '../shared/constants/colors';
import NotVerifiedScreen from '../screens/notVerified';
import ForgotPasswordScreen from '../screens/forgotPassword';
import I18n from 'i18n-js';

export default createStackNavigator(
    {
        [screens.Login]: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        [screens.SignUp]: {
            screen: SignUpScreen
        },
        [screens.ForgotPassword]: {
            screen: ForgotPasswordScreen,
            navigationOptions: ({ navigation, navigationOptions }) => ({
                title: I18n.t('navigation.forgotPassword')
            })
        },
        [screens.NotVerified]: {
            screen: NotVerifiedScreen,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: screens.Login,
        defaultNavigationOptions: ({ navigation, navigationOptions }) => ({
            title: I18n.t('navigation.createAccount'),
            headerTintColor: globalWhite,
            headerStyle: {
                backgroundColor: globalGreen
            }
        })
    }
);
