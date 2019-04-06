import React from 'react';
import { Item, Input, Content, Text } from 'native-base';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { DotIndicator, UIActivityIndicator } from 'react-native-indicators';
import { CenterRow, CenterFormContainer, ErrorText } from '../../../shared/styles/common';
import { ForgotPasswordText, LoginButton, additionalTopPadding } from '../styles/loginFormStyles';
import { loginEmail } from '../state/actions';
import { globalGreen, globalWhite } from '../../../shared/constants/colors';
import screens from '../../../navigation/screens';
import { loginSchema } from '../../../shared/utils/validationSchemas';
import { loginInitialValues } from '../../../shared/constants/formInitialValues';

const LoginForm = props => {
    const { login, isKeyboardVisible, authLoading, nav } = { ...props };

    return (
        <Formik
            initialValues={loginInitialValues}
            onSubmit={values => login(values)}
            validationSchema={loginSchema}
        >
            {formikProps => (
                <Content>
                    {authLoading ? <DotIndicator color={globalGreen} count={5} /> : null}
                    <CenterRow>
                        <CenterFormContainer
                            style={isKeyboardVisible ? additionalTopPadding : null}
                        >
                            <Item regular>
                                <Input
                                    keyboardType="email-address"
                                    placeholder="Email"
                                    onChangeText={formikProps.handleChange('email')}
                                    onBlur={formikProps.handleBlur('email')}
                                    disabled={authLoading}
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
                                    disabled={authLoading}
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.password && formikProps.errors.password}
                            </ErrorText>
                            <ForgotPasswordText
                                onPress={() => nav.navigate(screens.ForgotPassword)}
                            >
                                Forgot password?
                            </ForgotPasswordText>
                        </CenterFormContainer>
                    </CenterRow>
                    <CenterRow>
                        <LoginButton onPress={formikProps.handleSubmit} disabled={authLoading}>
                            {authLoading ? (
                                <UIActivityIndicator size={30} color={globalWhite} />
                            ) : (
                                <Text>Login</Text>
                            )}
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
