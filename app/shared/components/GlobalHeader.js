import React from 'react';
import { Header, Left, Button, Icon, Body, Title, Right, Thumbnail } from 'native-base';
import { globalGreen } from '../constants/colors';
import screens from '../../navigation/screens';

const GlobalHeader = props => {
    const { nav, avatar } = { ...props };
    return (
        <Header style={{ backgroundColor: globalGreen }}>
            <Left style={{ flex: 1 }}>
                <Button transparent onPress={() => nav.openDrawer()}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body style={{ flex: 1 }}>
                <Title>logo temp</Title>
            </Body>
            <Right style={{ flex: 1 }}>
                <Button onPress={() => nav.navigate(screens.Profile)} transparent>
                    <Thumbnail
                        small
                        source={{
                            uri: avatar,
                        }}
                    />
                </Button>
            </Right>
        </Header>
    );
};

export default GlobalHeader;
