import React from 'react';
import { Text, Content, List, Left, Body } from 'native-base';
import { connect } from 'react-redux';
import { Icon, ListItem } from 'react-native-elements';
import { GlobalContainer } from '../styles/common';
import actions from '../state/actions';
import screens from '../../navigation/screens';
import hps from '../utils/helpers';
import lists from '../constants/lists';

const SideBar = props => {
    const { signOut, navigation } = { ...props };

    const sideBarActions = [() => navigation.navigate(screens.Profile), signOut];
    const items = hps.completeSideBarListWithActions(lists.SIDE_BAR_LIST, sideBarActions);

    const sideBarItems = items.map(item => {
        const { id, icon, action, label } = { ...item };
        return <ListItem key={id} leftIcon={icon} onPress={action} title={label} />;
    });

    return (
        <GlobalContainer style={{ backgroundColor: '#FFFFFF' }}>
            <Content>{sideBarItems}</Content>
        </GlobalContainer>
    );
};

export const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(actions.logout()),
});

export default connect(
    null,
    mapDispatchToProps
)(SideBar);
