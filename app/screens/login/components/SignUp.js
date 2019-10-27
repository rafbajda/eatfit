import React from 'react';
import {
    SignUpContainer,
    InformationText,
    SignUpText
} from '../styles/signUpStyles';
import screens from '../../../navigation/screens';

const SignUp = props => {
    const { nav } = { ...props };
    return (
        <SignUpContainer>
            <InformationText>
                {"Don't have an account?"}
                <SignUpText onPress={() => nav.navigate(screens.SignUp)}>
                    {' '}
                    Sign up
                </SignUpText>
            </InformationText>
        </SignUpContainer>
    );
};
export default SignUp;
