import { CREATE_ACCOUNT_SUCCESS, createUserObject } from './actions';

const signUpMiddleware = store => next => action => {
    if (typeof action === 'object') {
        switch (action.type) {
            case CREATE_ACCOUNT_SUCCESS:
                store.dispatch(createUserObject(action.payload));
                break;
            default:
                return next(action);
        }
    }
    return next(action);
};

export default signUpMiddleware;
