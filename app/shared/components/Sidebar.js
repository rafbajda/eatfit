import React from 'react';
import { Text, Content, List, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { GlobalContainer } from '../styles/common';
import actions from '../state/actions';

const SideBar = props => {
    const { signOut } = { ...props };

    const items = [
        {
            id: 0,
            label: 'Logout',
            action: signOut,
        },
    ];

    const sideBarItems = items.map(item => (
        <ListItem onPress={item.action} key={item.id}>
            <Text>{item.label}</Text>
        </ListItem>
    ));

    return (
        <GlobalContainer style={{ backgroundColor: '#FFFFFF' }}>
            <Content>
                <List>{sideBarItems}</List>
            </Content>
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
