import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import HomeScreen from '../screens/home';

export default createStackNavigator(
    {
        [screens.Home]: {
            screen: HomeScreen,
        },
    },
    { initialRouteName: screens.Home }
);
