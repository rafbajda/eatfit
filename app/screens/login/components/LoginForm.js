import React from 'react';
import { Item, Input, Content, Text } from 'native-base';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { CenterRow } from '../../../shared/styles/common';
import {
    LoginFormContainer,
    ForgotPasswordText,
    LoginButton,
    ErrorText,
    additionalTopPadding,
} from '../styles/loginFormStyles';
import { loginEmail } from '../state/actions';
import { emailValidator, passwordValidator } from '../../../shared/utils/validators';

const validationSchema = yup.object().shape({
    email: emailValidator,
    password: passwordValidator,
});

const LoginForm = props => {
    const { login, isKeyboardVisible } = { ...props };
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => login(values)}
            validationSchema={validationSchema}
        >
            {formikProps => (
                <Content>
                    <CenterRow>
                        <LoginFormContainer style={isKeyboardVisible ? additionalTopPadding : null}>
                            <Item regular>
                                <Input
                                    placeholder="Email"
                                    onChangeText={formikProps.handleChange('email')}
                                    onBlur={formikProps.handleBlur('email')}
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.email && formikProps.errors.email}
                            </ErrorText>
                            <Item regular>
                                <Input
                                    placeholder="Password"
                                    onChangeText={formikProps.handleChange('password')}
                                    onBlur={formikProps.handleBlur('password')}
                                    secureTextEntry
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.password && formikProps.errors.password}
                            </ErrorText>
                            <ForgotPasswordText>Forgot password?</ForgotPasswordText>
                        </LoginFormContainer>
                    </CenterRow>
                    <CenterRow>
                        <LoginButton onPress={formikProps.handleSubmit}>
                            <Text>Login</Text>
                        </LoginButton>
                    </CenterRow>
                </Content>
            )}
        </Formik>
    );
};

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(loginEmail(payload)),
});

export default connect(
    null,
    mapDispatchToProps
)(LoginForm);
