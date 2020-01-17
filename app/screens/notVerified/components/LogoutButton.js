import React from 'react';
import { Row, Text } from 'native-base';
import styles, { OtherActionButton } from '../styles/notVerifiedStyles';
import I18n from 'i18n-js';

const LogoutButton = props => {
    const { signOut, OtherActionRowStyle, OtherActionTextStyle, t } = {
        ...props,
        ...styles,
        ...I18n
    };
    return (
        <Row style={OtherActionRowStyle}>
            <OtherActionButton onPress={() => signOut()} rounded>
                <Text style={OtherActionTextStyle}>
                    {t('buttons.logIntoAnotherAccount')}
                </Text>
            </OtherActionButton>
        </Row>
    );
};
export default LogoutButton;
