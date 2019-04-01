import React from 'react';
import { Item, Input, Content, Text, CheckBox, Body } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
    emailValidator,
    passwordValidator,
    confirmPasswordValidator,
    checkboxRequiredValidator,
    checkboxValidator,
} from '../../shared/utils/validators';
import { CenterRow, ErrorText } from '../../shared/styles/common';
import {
    CreateButton,
    SignUpContainer,
    CheckboxInformationText,
    CheckboxItem,
} from './styles/singUpStyles';
import { globalGreen } from '../../shared/constants/Colors';

const validationSchema = yup.object().shape({
    email: emailValidator,
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator('password'),
    terms: checkboxRequiredValidator,
    newsletter: checkboxValidator,
});

const SignUpScreen = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                terms: false,
                newsletter: false,
            }}
            onSubmit={values => console.log(values)}
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
                            <Item regular>
                                <Input
                                    placeholder="Confirm Password"
                                    onChangeText={formikProps.handleChange('confirmPassword')}
                                    onBlur={formikProps.handleBlur('confirmPassword')}
                                    secureTextEntry
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.confirmPassword &&
                                    formikProps.errors.confirmPassword}
                            </ErrorText>
                            <CheckboxItem>
                                <CheckBox
                                    checked={formikProps.values.terms}
                                    color={globalGreen}
                                    onChange={formikProps.handleChange('terms')}
                                    onBlur={formikProps.handleBlur('terms')}
                                />
                                <Body>
                                    <CheckboxInformationText>
                                        I have read and accept the Terms and Conditions.
                                    </CheckboxInformationText>
                                </Body>
                            </CheckboxItem>
                            <ErrorText>
                                {formikProps.touched.terms && formikProps.errors.terms}
                            </ErrorText>
                            <CheckboxItem>
                                <CheckBox
                                    checked={formikProps.values.newsletter}
                                    color={globalGreen}
                                    onChange={formikProps.handleChange('newsletter')}
                                    onBlur={formikProps.handleBlur('newsletter')}
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
                        <CreateButton onPress={formikProps.handleSubmit}>
                            <Text>Create</Text>
                        </CreateButton>
                    </CenterRow>
                </Content>
            )}
        </Formik>
    );
};

export default SignUpScreen;
