import { actionTypes } from './actions';
import ops from '../utils/operations';
import firebaseOps from '../utils/firebaseOperations';
import globalActions from '../../../shared/state/actions';

const profileMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.SET_USER_LANGUAGE:
            firebaseOps.updateUserLanguage(
                store.getState().auth.user.uid,
                payload,
                dispatch
            );
            break;
        case actionTypes.SET_USER_LANGUAGE_SUCCESS:
            dispatch(globalActions.setUser(payload));
            ops.showUpdateLanguageSuccessToast();
            break;
        case actionTypes.CHANGE_AVATAR:
            ops.openChangeAvatarActions(dispatch);
            break;
        case actionTypes.UPDATE_USER:
            ops.updateUserProfile(
                {
                    profileFormValues: payload,
                    profileData: store.getState().profile,
                    authUser: store.getState().auth.user
                },
                dispatch
            );
            break;
        default:
            return next(action);
    }
    return next(action);
};

export default profileMiddleware;
