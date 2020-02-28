import React from 'react';
import {
    Header,
    Left,
    Button,
    Icon,
    Body,
    Right,
    Thumbnail
} from 'native-base';
import { Image } from 'react-native-elements';
import Constants from 'expo-constants';
import { globalGreen } from '../constants/colors';
import screens from '../../navigation/screens';

const logoImage = require('../../assets/images/eatfit_without_icon.png');

const GlobalHeader = props => {
    const { nav, avatar } = { ...props };
    return (
        <Header
            style={{
                backgroundColor: globalGreen,
                marginTop: Constants.statusBarHeight
            }}
        >
            <Left style={{ flex: 1 }}>
                <Button transparent onPress={() => nav.openDrawer()}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body style={{ flex: 1 }}>
                <Image
                    source={logoImage}
                    style={{ width: 120, height: 25 }}
                    placeholderStyle={{ backgroundColor: globalGreen }}
                />
            </Body>
            <Right style={{ flex: 1 }}>
                <Button
                    onPress={() => nav.navigate(screens.Profile)}
                    transparent
                >
                    <Thumbnail
                        small
                        source={{
                            uri: avatar
                        }}
                    />
                </Button>
            </Right>
        </Header>
    );
};

export default GlobalHeader;
