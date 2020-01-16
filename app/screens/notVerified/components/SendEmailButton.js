import React from 'react';
import { Row, Text } from 'native-base';
import styles, { OtherActionButton } from '../styles/notVerifiedStyles';

const SendEmailButton = props => {
    const { sendEmail, OtherActionTextStyle, OtherActionRowStyle } = {
        ...props,
        ...styles
    };
    return (
        <Row style={OtherActionRowStyle}>
            <OtherActionButton onPress={() => sendEmail()} rounded>
                <Text style={OtherActionTextStyle}>Send another email</Text>
            </OtherActionButton>
        </Row>
    );
};

export default SendEmailButton;
