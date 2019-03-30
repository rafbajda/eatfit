import { NavigationActions } from 'react-navigation';
import screens from '../../../navigation/screens';
import {
    LOAD_CONFIG,
    GET_FONTS_SUCCESS,
    GET_FONTS_ERROR,
    getFonts,
    loadConfigDone,
    LOGIN_EMAIL_SUCCESS,
} from './actions';

const configMiddleware = store => next => action => {
    if (typeof action === 'object') {
        switch (action.type) {
            case LOAD_CONFIG:
                store.dispatch(getFonts());
                break;
            case GET_FONTS_SUCCESS:
            case GET_FONTS_ERROR:
                store.dispatch(loadConfigDone());
                break;
            case LOGIN_EMAIL_SUCCESS:
                store.dispatch(
                    NavigationActions.navigate({
                        routeName: screens.AuthorizedApplication,

                        params: {},

                        action: NavigationActions.navigate({
                            routeName: screens.AuthorizedApplication,
                        }),
                    })
                );
                break;
            default:
                return next(action);
        }
    }
    return next(action);
};

export default configMiddleware;
