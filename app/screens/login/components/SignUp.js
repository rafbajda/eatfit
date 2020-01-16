import React from 'react';
import {
    SignUpContainer,
    InformationText,
    SignUpText
} from '../styles/signUpStyles';
import screens from '../../../navigation/screens';
import I18n from 'i18n-js';

const SignUp = props => {
    const { nav } = { ...props };
    const { t } = I18n;
    return (
        <SignUpContainer>
            <InformationText>
                {t('info.dontHaveAccount')}
                <SignUpText onPress={() => nav.navigate(screens.SignUp)}>
                    {' ' + t('actions.signUp')}
                </SignUpText>
            </InformationText>
        </SignUpContainer>
    );
};
export default SignUp;
