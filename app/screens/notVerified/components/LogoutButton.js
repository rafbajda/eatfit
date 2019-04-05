import React from 'react';
import { Row, Text } from 'native-base';
import {
    OtherActionRowStyle,
    OtherActionButton,
    OtherActionTextStyle,
} from '../styles/notVerifiedStyles';

const LogoutButton = props => {
    const { signOut } = { ...props };
    return (
        <Row style={OtherActionRowStyle}>
            <OtherActionButton onPress={() => signOut()} rounded>
                <Text style={OtherActionTextStyle}>Log in to another account</Text>
            </OtherActionButton>
        </Row>
    );
};
export default LogoutButton;
