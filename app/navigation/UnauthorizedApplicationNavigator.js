import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signUp';
import { globalGreen, globalWhite } from '../shared/constants/colors';
import NotVerifiedScreen from '../screens/notVerified';
import ForgotPasswordScreen from '../screens/forgotPassword';

export default createStackNavigator(
    {
        [screens.Login]: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            },
        },
        [screens.SignUp]: {
            screen: SignUpScreen,
        },
        [screens.ForgotPassword]: {
            screen: ForgotPasswordScreen,
            navigationOptions: {
                title: 'Forgot password',
            },
        },
        [screens.NotVerified]: {
            screen: NotVerifiedScreen,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        initialRouteName: screens.Login,
        defaultNavigationOptions: {
            title: 'Create an Account',
            headerTintColor: globalWhite,
            headerStyle: {
                backgroundColor: globalGreen,
            },
        },
    }
);
