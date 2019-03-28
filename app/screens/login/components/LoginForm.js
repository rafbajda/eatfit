import React from 'react';
import { Item, Input, Content, Text } from 'native-base';
import * as yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { CenterRow } from '../../../shared/styles/common';
import { LoginFormContainer, ForgotPasswordText, LoginButton } from '../styles/loginFormStyles';
import { loginEmail } from '../state/actions';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .label('Email')
        .email()
        .required(),
    password: yup
        .string()
        .label('Password')
        .required()
        .min(6, 'Minimal length is 6 characters'),
});

const LoginForm = props => {
    const { login } = { ...props };
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => login(values)}
            validationSchema={validationSchema}
        >
            {formikProps => (
                <Content>
                    <CenterRow>
                        <LoginFormContainer>
                            <Item regular>
                                <Input
                                    placeholder="Email"
                                    onChangeText={formikProps.handleChange('email')}
                                    onBlur={formikProps.handleBlur('email')}
                                />
                            </Item>
                            <Text style={{ color: 'red' }}>
                                {formikProps.touched.email && formikProps.errors.email}
                            </Text>
                            <Item regular>
                                <Input
                                    placeholder="Password"
                                    onChangeText={formikProps.handleChange('password')}
                                    onBlur={formikProps.handleBlur('password')}
                                    secureTextEntry
                                />
                            </Item>
                            <Text style={{ color: 'red' }}>
                                {formikProps.touched.password && formikProps.errors.password}
                            </Text>
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
