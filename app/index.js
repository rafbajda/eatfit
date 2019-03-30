/* eslint-disable import/prefer-default-export */
import { Provider } from 'react-redux';
import store from './shared/modules/store';

import Application from './screens';

export const rootNavigator = new Application(store, Provider);

rootNavigator.run();
