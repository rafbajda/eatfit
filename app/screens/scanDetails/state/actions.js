export const actionTypes = {
    SET_SUBSTANCE_DETAILS: '[scan details] set substance details',
};

const setSubstanceDetails = payload => ({ type: actionTypes.SET_SUBSTANCE_DETAILS, payload });

export default {
    setSubstanceDetails,
};
