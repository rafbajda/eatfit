import React from 'react';
import { Item, Input, Content, Text, CheckBox, Body } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { UIActivityIndicator } from 'react-native-indicators';
import {
    emailValidator,
    passwordValidator,
    confirmPasswordValidator,
    checkboxRequiredValidator,
    checkboxValidator,
} from '../../shared/utils/validators';
import { CenterRow, ErrorText, ErrorTextPaddingLeft } from '../../shared/styles/common';
import {
    CreateButton,
    SignUpContainer,
    CheckboxInformationText,
    CheckboxItem,
} from './styles/singUpStyles';
import { globalGreen, globalWhite } from '../../shared/constants/colors';
import { checkBoxSetter } from '../../shared/utils/formHelpers';
import { createAccount } from './state/actions';
import { authLoadingSelector } from '../../shared/state/selectors';

const validationSchema = yup.object().shape({
    email: emailValidator,
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator('password'),
    terms: checkboxRequiredValidator,
    newsletter: checkboxValidator,
});

const SignUpScreen = props => {
    const { signUp, isAuthLoading } = { ...props };
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                terms: false,
                newsletter: false,
            }}
            onSubmit={values => signUp(values)}
            validationSchema={validationSchema}
        >
            {formikProps => (
                <Content>
                    <CenterRow>
                        <SignUpContainer>
                            <Item regular>
                                <Input
                                    keyboardType="email-address"
                                    placeholder="Email"
                                    onChangeText={formikProps.handleChange('email')}
                                    onBlur={formikProps.handleBlur('email')}
                                    disabled={isAuthLoading}
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
                                    disabled={isAuthLoading}
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.password && formikProps.errors.password}
                            </ErrorText>
                            <Item regular>
                                <Input
                                    placeholder="Confirm Password"
                                    onChangeText={formikProps.handleChange('confirmPassword')}
                                    onBlur={formikProps.handleBlur('confirmPassword')}
                                    secureTextEntry
                                    disabled={isAuthLoading}
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.confirmPassword &&
                                    formikProps.errors.confirmPassword}
                            </ErrorText>
                            <CheckboxItem onPress={() => checkBoxSetter(formikProps, 'terms')}>
                                <CheckBox checked={formikProps.values.terms} color={globalGreen} />
                                <Body>
                                    <CheckboxInformationText>
                                        I have read and accept the Terms and Conditions.
                                    </CheckboxInformationText>
                                </Body>
                            </CheckboxItem>
                            <ErrorTextPaddingLeft>
                                {formikProps.touched.terms && formikProps.errors.terms}
                            </ErrorTextPaddingLeft>
                            <CheckboxItem onPress={() => checkBoxSetter(formikProps, 'newsletter')}>
                                <CheckBox
                                    color={globalGreen}
                                    checked={formikProps.values.newsletter}
                                />
                                <Body>
                                    <CheckboxInformationText>
                                        (optional) I agree to receive from Badjex Sp. z o. o. and
                                        their partners commercial information(for example
                                        newsletter) by electronic communication
                                    </CheckboxInformationText>
                                </Body>
                            </CheckboxItem>
                            <ErrorText>
                                {formikProps.touched.newsletter && formikProps.errors.newsletter}
                            </ErrorText>
                        </SignUpContainer>
                    </CenterRow>
                    <CenterRow>
                        <CreateButton onPress={formikProps.handleSubmit} disabled={isAuthLoading}>
                            {isAuthLoading ? (
                                <UIActivityIndicator size={30} color={globalWhite} />
                            ) : (
                                <Text>Create</Text>
                            )}
                        </CreateButton>
                    </CenterRow>
                </Content>
            )}
        </Formik>
    );
};

const mapStateToProps = state => ({
    isAuthLoading: authLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(createAccount(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpScreen);
