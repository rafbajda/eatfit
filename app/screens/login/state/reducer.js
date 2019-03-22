import initialState from '../../../shared/constants/State';

const ONE_UPDATED = 'temp';

export default (state = initialState, action) => {
    switch (action.type) {
        case ONE_UPDATED:
            return {
                ...state,
            };
        default:
            return state;
    }
};
