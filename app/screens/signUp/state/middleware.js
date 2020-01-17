import { actionTypes } from './actions';
import globalActions from '../../../shared/state/actions';
import ops from '../utils/operations';

const signUpMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.CREATE_ACCOUNT:
            ops.createAccount(
                {
                    ...payload,
                    language: store.getState().config.pickedLanguage
                },
                dispatch
            );
            break;
        case actionTypes.CREATE_ACCOUNT_SUCCESS:
            dispatch(globalActions.createUserObject(payload));
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default signUpMiddleware;
