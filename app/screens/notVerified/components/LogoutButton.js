import React from 'react';
import { Row, Text } from 'native-base';
import styles, { OtherActionButton } from '../styles/notVerifiedStyles';

const LogoutButton = props => {
    const { signOut, OtherActionRowStyle, OtherActionTextStyle } = { ...props, ...styles };
    return (
        <Row style={OtherActionRowStyle}>
            <OtherActionButton onPress={() => signOut()} rounded>
                <Text style={OtherActionTextStyle}>Log in to another account</Text>
            </OtherActionButton>
        </Row>
    );
};
export default LogoutButton;
