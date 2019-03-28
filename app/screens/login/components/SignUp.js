/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { SignUpContainer, InformationText, SignUpText } from '../styles/signUpStyles';

const SignUp = () => {
    return (
        <SignUpContainer>
            <InformationText>
                Don't have an account?
                <SignUpText> Sign up</SignUpText>
            </InformationText>
        </SignUpContainer>
    );
};
export default SignUp;
