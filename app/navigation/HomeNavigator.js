import { createStackNavigator } from 'react-navigation';
import Constants from 'expo-constants';
import screens from './screens';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import ScanDetails from '../screens/scanDetails';
import { globalWhite, globalGreen } from '../shared/constants/colors';
import substanceDetails from '../screens/substanceDetails';
import scansHistory from '../screens/scansHistory';
import allSubstances from '../screens/allSubstances';

export default createStackNavigator(
    {
        [screens.Home]: {
            screen: HomeScreen,
            navigationOptions: { header: null }
        },
        [screens.Profile]: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'My account'
            }
        },
        [screens.ScanDetails]: {
            screen: ScanDetails,
            navigationOptions: {
                title: 'Scan Details'
            }
        },
        [screens.SubstanceDetails]: {
            screen: substanceDetails,
            navigationOptions: {
                title: 'Substance Details'
            }
        },
        [screens.ScansHistory]: {
            screen: scansHistory,
            navigationOptions: {
                title: 'Scans History'
            }
        },
        [screens.AllSubstances]: {
            screen: allSubstances,
            navigationOptions: {
                title: 'All Substances'
            }
        }
    },
    {
        headerTransitionPreset: 'uikit',
        initialRouteName: screens.Home,
        defaultNavigationOptions: {
            headerForceInset: { vertical: 'never' },
            headerTintColor: globalWhite,
            headerStyle: {
                marginTop: Constants.statusBarHeight,
                backgroundColor: globalGreen
            }
        }
    }
);
