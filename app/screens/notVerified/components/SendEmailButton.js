import React from 'react';
import { Row, Text } from 'native-base';
import I18n from 'i18n-js';
import styles, { OtherActionButton } from '../styles/notVerifiedStyles';

const SendEmailButton = props => {
    const { sendEmail, OtherActionTextStyle, OtherActionRowStyle, t } = {
        ...props,
        ...styles,
        ...I18n
    };
    return (
        <Row style={OtherActionRowStyle}>
            <OtherActionButton onPress={() => sendEmail()} rounded>
                <Text style={OtherActionTextStyle}>{t('buttons.sendAnotherEmail')}</Text>
            </OtherActionButton>
        </Row>
    );
};

export default SendEmailButton;
