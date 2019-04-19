import initialState from '../../../shared/constants/state';
import { actionTypes as globalActionTypes } from '../../../shared/state/actions';
import { actionTypes } from './actions';
import ops from '../utils/operations';

const profileInitialState = initialState.profile;

const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {
        case globalActionTypes.SET_USER:
            return {
                ...state,
                ...ops.getProfileFromAuthUser(action.payload),
            };
        case globalActionTypes.LOGOUT_SUCCESS:
            return profileInitialState;
        case actionTypes.CHANGE_AVATAR_SUCCESS:
            return {
                ...state,
                photoUrl: action.payload,
            };
        case actionTypes.REMOVE_AVATAR:
            return {
                ...state,
                photoUrl: null,
            };
        default:
            return state;
    }
};

export default profileReducer;
