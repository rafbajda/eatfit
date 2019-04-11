import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import { globalWhite, globalGreen } from '../shared/constants/colors';

export default createStackNavigator(
    {
        [screens.Home]: { screen: HomeScreen, navigationOptions: { header: null } },
        [screens.Profile]: { screen: ProfileScreen, navigationOptions: { title: 'My account' } },
    },
    {
        headerTransitionPreset: 'uikit',
        initialRouteName: screens.Home,
        defaultNavigationOptions: {
            headerTintColor: globalWhite,
            headerStyle: {
                backgroundColor: globalGreen,
            },
        },
    }
);
