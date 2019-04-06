import React from 'react';
import { SocialIcon } from 'react-native-elements';
import { Col } from 'native-base';
import { SocialContainer } from '../styles/socialLoginStyles';
import socialService from '../../../shared/modules/socialService';

const SocialLogin = () => {
    return (
        <SocialContainer>
            <Col>
                <SocialIcon
                    type="facebook"
                    title="Facebook"
                    onPress={socialService.loginWithFacebook}
                    button
                />
            </Col>
            <Col>
                <SocialIcon type="google-plus-official" title="Google" button />
            </Col>
        </SocialContainer>
    );
};

export default SocialLogin;
