let navigator;

const setNavigator = nav => {
    navigator = nav;
};

const navigate = route => {
    navigator.navigate(route);
};

export default {
    navigate,
    setNavigator,
};
