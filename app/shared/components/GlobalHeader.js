import React from 'react';
import { Header, Left, Button, Icon, Body, Title, Right, Thumbnail } from 'native-base';
import { globalGreen } from '../constants/colors';

const GlobalHeader = props => {
    const { nav } = { ...props };
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
                <Button transparent>
                    <Thumbnail
                        small
                        source={{
                            uri:
                                'https://i.kinja-img.com/gawker-media/image/upload/s--Tg_qqR3r--/c_scale,f_auto,fl_progressive,q_80,w_800/dnmtn4ksijwyep0xmljk.jpg',
                        }}
                    />
                </Button>
            </Right>
        </Header>
    );
};

export default GlobalHeader;
