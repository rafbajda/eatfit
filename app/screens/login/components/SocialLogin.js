import React from 'react';
import { SocialIcon } from 'react-native-elements';
import { Col } from 'native-base';
import { SocialContainer } from '../styles/socialLoginStyles';

const SocialLogin = () => {
    return (
        <SocialContainer>
            <Col>
                <SocialIcon type="facebook" title="Facebook" button />
            </Col>
            <Col>
                <SocialIcon type="google-plus-official" title="Google" button />
            </Col>
        </SocialContainer>
    );
};

export default SocialLogin;
