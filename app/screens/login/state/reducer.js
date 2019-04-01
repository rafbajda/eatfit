import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actions';
import initialState from '../../../shared/constants/State';

const initialUserState = initialState.user;

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case LOGOUT_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default userReducer;
