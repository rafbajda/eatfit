import React from 'react';
import { Formik } from 'formik';
import { Content, Item, Input, Text } from 'native-base';
import { UIActivityIndicator } from 'react-native-indicators';
import {
    CenterRow,
    CenterFormContainerPaddingTop,
    ErrorText,
    SubmitFormButton,
} from '../../../shared/styles/common';
import initialFormValues from '../../../shared/constants/formInitialValues';
import { globalWhite } from '../../../shared/constants/colors';
import validationSchemas from '../../../shared/utils/validationSchemas';

const ForgotPasswordForm = props => {
    const { resetPassword, isAuthLoading, forgotPasswordInitialValues, forgotPasswordSchema } = {
        ...props,
        ...initialFormValues,
        ...validationSchemas,
    };
    return (
        <Formik
            initialValues={forgotPasswordInitialValues}
            onSubmit={values => resetPassword(values)}
            validationSchema={forgotPasswordSchema}
        >
            {formikProps => (
                <Content>
                    <CenterRow>
                        <CenterFormContainerPaddingTop>
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
                                <Text>Reset Password</Text>
                            )}
                        </SubmitFormButton>
                    </CenterRow>
                </Content>
            )}
        </Formik>
    );
};

export default ForgotPasswordForm;
