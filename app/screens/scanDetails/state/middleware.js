import { actionTypes } from './actions';
import NavigationService from '../../../navigation/NavigationService';
import screens from '../../../navigation/screens';

const substanceDetailsMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.SET_SUBSTANCE_DETAILS:
            NavigationService.navigate(screens.SubstanceDetails);
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default substanceDetailsMiddleware;
