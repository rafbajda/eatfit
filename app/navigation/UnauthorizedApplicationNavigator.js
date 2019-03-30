import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import LoginScreen from '../screens/login';

export default createStackNavigator(
    {
        [screens.Login]: {
            screen: LoginScreen,
        },
    },
    { initialRouteName: screens.Login }
);
