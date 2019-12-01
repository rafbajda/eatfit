import React from 'react';
import { Formik } from 'formik';
import { Content, Item, Input, CheckBox, Body, Text } from 'native-base';
import { UIActivityIndicator } from 'react-native-indicators';
import {
    CenterRow,
    CenterFormContainerPaddingTop,
    ErrorText,
    ErrorTextPaddingLeft,
    SubmitFormButton
} from '../../../shared/styles/common';
import { CheckboxItem, CheckboxInformationText } from '../styles/singUpStyles';
import { globalGreen, globalWhite } from '../../../shared/constants/colors';
import validationSchemas from '../../../shared/utils/validationSchemas';
import formInitialValues from '../../../shared/constants/formInitialValues';
import hps from '../utils/helpers';

const SignUpForm = props => {
    const { signUp, isAuthLoading, signUpInitialValues, signUpSchema } = {
        ...props,
        ...formInitialValues,
        ...validationSchemas
    };
    return (
        <Formik
            initialValues={signUpInitialValues}
            onSubmit={values => signUp(values)}
            validationSchema={signUpSchema}
        >
            {formikProps => (
                <Content>
                    <CenterRow>
                        <CenterFormContainerPaddingTop>
                            <Item regular>
                                <Input
                                    keyboardType="email-address"
                                    placeholder="Email"
                                    onChangeText={formikProps.handleChange(
                                        'email'
                                    )}
                                    onBlur={formikProps.handleBlur('email')}
                                    disabled={isAuthLoading}
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.email &&
                                    formikProps.errors.email}
                            </ErrorText>
                            <Item regular>
                                <Input
                                    placeholder="Password"
                                    onChangeText={formikProps.handleChange(
                                        'password'
                                    )}
                                    onBlur={formikProps.handleBlur('password')}
                                    secureTextEntry
                                    disabled={isAuthLoading}
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.password &&
                                    formikProps.errors.password}
                            </ErrorText>
                            <Item regular>
                                <Input
                                    placeholder="Confirm Password"
                                    onChangeText={formikProps.handleChange(
                                        'confirmPassword'
                                    )}
                                    onBlur={formikProps.handleBlur(
                                        'confirmPassword'
                                    )}
                                    secureTextEntry
                                    disabled={isAuthLoading}
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.confirmPassword &&
                                    formikProps.errors.confirmPassword}
                            </ErrorText>
                            <CheckboxItem
                                onPress={() =>
                                    hps.checkBoxSetter(formikProps, 'terms')
                                }
                            >
                                <CheckBox
                                    checked={formikProps.values.terms}
                                    color={globalGreen}
                                />
                                <Body>
                                    <CheckboxInformationText>
                                        I have read and accept the Terms and
                                        Conditions.
                                    </CheckboxInformationText>
                                </Body>
                            </CheckboxItem>
                            <ErrorTextPaddingLeft>
                                {formikProps.touched.terms &&
                                    formikProps.errors.terms}
                            </ErrorTextPaddingLeft>
                            <CheckboxItem
                                onPress={() =>
                                    hps.checkBoxSetter(
                                        formikProps,
                                        'newsletter'
                                    )
                                }
                            >
                                <CheckBox
                                    color={globalGreen}
                                    checked={formikProps.values.newsletter}
                                />
                                <Body>
                                    <CheckboxInformationText>
                                        (optional) I agree to receive from
                                        Badjex Sp. z o. o. and their partners
                                        commercial information(for example
                                        newsletter) by electronic communication
                                    </CheckboxInformationText>
                                </Body>
                            </CheckboxItem>
                            <ErrorText>
                                {formikProps.touched.newsletter &&
                                    formikProps.errors.newsletter}
                            </ErrorText>
                        </CenterFormContainerPaddingTop>
                    </CenterRow>
                    <CenterRow>
                        <SubmitFormButton
                            onPress={formikProps.handleSubmit}
                            disabled={isAuthLoading}
                        >
                            {isAuthLoading ? (
                                <UIActivityIndicator
                                    size={30}
                                    color={globalWhite}
                                />
                            ) : (
                                <Text>Create</Text>
                            )}
                        </SubmitFormButton>
                    </CenterRow>
                </Content>
            )}
        </Formik>
    );
};

export default SignUpForm;
