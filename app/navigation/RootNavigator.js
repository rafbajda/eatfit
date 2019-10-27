import { createSwitchNavigator } from 'react-navigation';
import screens from './screens';
import AuthorizedApplicationNavigator from './AuthorizedApplicationNavigator';
import UnauthorizedApplicationNavigator from './UnauthorizedApplicationNavigator';

const RootNavigator = createSwitchNavigator(
    {
        [screens.AuthorizedApplication]: {
            screen: AuthorizedApplicationNavigator
        },
        [screens.UnauthorizedApplication]: {
            screen: UnauthorizedApplicationNavigator
        }
    },
    { initialRouteName: screens.UnauthorizedApplication }
);

export default RootNavigator;
