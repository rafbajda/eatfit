import { actionTypes } from './actions';
import ops from '../utils/operations';

const profileMiddleware = store => next => action => {
    const { payload, dispatch } = { ...store, ...action };
    switch (action.type) {
        case actionTypes.CHANGE_AVATAR:
            ops.openChangeAvatarActions(dispatch);
            break;
        case actionTypes.UPDATE_USER:
            ops.updateUserProfile(
                {
                    profileFormValues: payload,
                    profileData: store.getState().profile,
                    authUser: store.getState().auth.user,
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
