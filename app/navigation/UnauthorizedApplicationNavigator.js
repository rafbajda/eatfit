import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signUp';
import { globalGreen } from '../shared/constants/Colors';

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
    },
    {
        initialRouteName: screens.Login,
        defaultNavigationOptions: {
            title: 'Create an Account',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: globalGreen,
            },
        },
    }
);
