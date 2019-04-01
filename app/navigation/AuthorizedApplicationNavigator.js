import { createDrawerNavigator } from 'react-navigation';
import screens from './screens';
import SideBar from '../shared/components/Sidebar';
import HomeNavigator from './HomeNavigator';

export default createDrawerNavigator(
    {
        [screens.Home]: {
            screen: HomeNavigator,
            drawerLabel: 'Home',
        },
    },
    { drawerPosition: 'left', contentComponent: SideBar }
);
