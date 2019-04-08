import React from 'react';
import { SocialIcon } from 'react-native-elements';
import { Col } from 'native-base';
import { SocialContainer } from '../styles/socialLoginStyles';

const SocialLogin = props => {
    const { loginFacebook, loginGoogle } = { ...props };
    return (
        <SocialContainer>
            <Col>
                <SocialIcon type="facebook" title="Facebook" onPress={loginFacebook} button />
            </Col>
            <Col>
                <SocialIcon
                    type="google-plus-official"
                    title="Google"
                    onPress={loginGoogle}
                    button
                />
            </Col>
        </SocialContainer>
    );
};

export default SocialLogin;
