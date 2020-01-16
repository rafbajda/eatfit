import React from 'react';
import { SocialIcon } from 'react-native-elements';
import { Col } from 'native-base';
import { SocialContainer } from '../styles/socialLoginStyles';
import I18n from 'i18n-js';

const SocialLogin = props => {
    const { loginFacebook, loginGoogle } = { ...props };
    const { t } = I18n;

    return (
        <SocialContainer>
            <Col>
                <SocialIcon
                    type="facebook"
                    title={t('buttons.facebook')}
                    onPress={loginFacebook}
                    button
                />
            </Col>
            <Col>
                <SocialIcon
                    type="google-plus-official"
                    title={t('buttons.google')}
                    onPress={loginGoogle}
                    button
                />
            </Col>
        </SocialContainer>
    );
};

export default SocialLogin;
