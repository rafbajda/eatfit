export const actionTypes = {
    OPEN_PAST_SCAN: '[scan history] open past scan'
};

const openPastScan = payload => ({
    type: actionTypes.OPEN_PAST_SCAN,
    payload
});
export default {
    openPastScan
};
