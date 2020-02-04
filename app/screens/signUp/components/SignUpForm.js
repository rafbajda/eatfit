import React from 'react';
import { Formik } from 'formik';
import { Content, Item, Input, CheckBox, Body, Text } from 'native-base';
import { UIActivityIndicator } from 'react-native-indicators';
import I18n from 'i18n-js';
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
    const { t } = I18n;

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
                                    placeholder={t('placeholders.email')}
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
                                    placeholder={t('placeholders.password')}
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
                                    placeholder={t('placeholders.confirmPassword')}
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
                            <CheckboxItem onPress={() => hps.checkBoxSetter(formikProps, 'terms')}>
                                <CheckBox checked={formikProps.values.terms} color={globalGreen} />
                                <Body>
                                    <CheckboxInformationText>
                                        {t('info.termsCheckbox')}
                                    </CheckboxInformationText>
                                </Body>
                            </CheckboxItem>
                            <ErrorTextPaddingLeft>
                                {formikProps.touched.terms && formikProps.errors.terms}
                            </ErrorTextPaddingLeft>
                            <CheckboxItem
                                onPress={() => hps.checkBoxSetter(formikProps, 'newsletter')}
                            >
                                <CheckBox
                                    color={globalGreen}
                                    checked={formikProps.values.newsletter}
                                />
                                <Body>
                                    <CheckboxInformationText>
                                        {t('info.newsletterCheckbox')}
                                    </CheckboxInformationText>
                                </Body>
                            </CheckboxItem>
                            <ErrorText>
                                {formikProps.touched.newsletter && formikProps.errors.newsletter}
                            </ErrorText>
                        </CenterFormContainerPaddingTop>
                    </CenterRow>
                    <CenterRow>
                        <SubmitFormButton
                            onPress={formikProps.handleSubmit}
                            disabled={isAuthLoading}
                        >
                            {isAuthLoading ? (
                                <UIActivityIndicator size={30} color={globalWhite} />
                            ) : (
                                <Text>{t('buttons.create')}</Text>
                            )}
                        </SubmitFormButton>
                    </CenterRow>
                </Content>
            )}
        </Formik>
    );
};

export default SignUpForm;
