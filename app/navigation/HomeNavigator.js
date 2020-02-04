import { createStackNavigator } from 'react-navigation';
import Constants from 'expo-constants';
import I18n from 'i18n-js';
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
            navigationOptions: () => ({
                title: I18n.t('navigation.myAccount')
            })
        },
        [screens.ScanDetails]: {
            screen: ScanDetails,
            navigationOptions: () => ({
                title: I18n.t('navigation.scanDetails')
            })
        },
        [screens.SubstanceDetails]: {
            screen: substanceDetails,
            navigationOptions: () => ({
                title: I18n.t('navigation.substanceDetails')
            })
        },
        [screens.ScansHistory]: {
            screen: scansHistory,
            navigationOptions: () => ({
                title: I18n.t('navigation.scansHistory')
            })
        },
        [screens.AllSubstances]: {
            screen: allSubstances,
            navigationOptions: () => ({
                title: I18n.t('navigation.allSubstances')
            })
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
