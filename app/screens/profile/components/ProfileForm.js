import React from 'react';
import { Text, Content, Item, Input, DatePicker, Icon } from 'native-base';
import { Formik } from 'formik';
import { UIActivityIndicator } from 'react-native-indicators';
import I18n from 'i18n-js';
import {
    CenterRow,
    CenterFormContainerPaddingTop,
    ErrorText,
    SubmitFormButton,
    CenterRowPaddingTop
} from '../../../shared/styles/common';
import { globalWhite, mediumGrey } from '../../../shared/constants/colors';
import formInitialValues from '../../../shared/constants/formInitialValues';
import { indicatorSize } from '../styles/profileFormStyles';

const ProfileForm = props => {
    const { profileSchema, isAuthLoading, profile, updateProfile, t } = {
        ...props,
        ...I18n
    };
    const profileInitialValues = formInitialValues.getProfileInitialValues(profile);
    return (
        <Formik
            initialValues={profileInitialValues}
            onSubmit={values => updateProfile(values)}
            validationSchema={profileSchema}
        >
            {formikProps => (
                <Content>
                    <CenterRow>
                        <CenterFormContainerPaddingTop>
                            <Item regular>
                                <Icon active name="person" />
                                <Input
                                    value={formikProps.values.firstName}
                                    placeholder={t('placeholders.yourName')}
                                    placeholderTextColor={mediumGrey}
                                    onChangeText={formikProps.handleChange('firstName')}
                                    onBlur={formikProps.handleBlur('firstName')}
                                    disabled={isAuthLoading}
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.firstName && formikProps.errors.firstName}
                            </ErrorText>
                            <Item regular>
                                <Icon active name="person" />
                                <Input
                                    value={formikProps.values.lastName}
                                    placeholder={t('placeholders.yourLastName')}
                                    placeholderTextColor={mediumGrey}
                                    onChangeText={formikProps.handleChange('lastName')}
                                    onBlur={formikProps.handleBlur('lastName')}
                                    disabled={isAuthLoading}
                                />
                            </Item>
                            <ErrorText>
                                {formikProps.touched.lastName && formikProps.errors.lastName}
                            </ErrorText>
                            <Item regular>
                                <Icon active name="calendar" />
                                <DatePicker
                                    defaultDate={new Date(formikProps.values.birthday)}
                                    maximumDate={new Date(Date.UTC(2020, 2, 1))}
                                    locale="en-US"
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType="slide"
                                    androidMode="spinner"
                                    placeHolderText={
                                        formikProps.values.birthday
                                            ? null
                                            : t('placeholders.yourBirthdayDate')
                                    }
                                    placeHolderTextStyle={{ color: mediumGrey }}
                                    onDateChange={formikProps.handleChange('birthday')}
                                    onBlur={formikProps.handleBlur('birthday')}
                                    disabled={isAuthLoading}
                                />
                            </Item>
                        </CenterFormContainerPaddingTop>
                    </CenterRow>
                    <CenterRowPaddingTop>
                        <SubmitFormButton
                            onPress={formikProps.handleSubmit}
                            disabled={isAuthLoading}
                        >
                            {isAuthLoading ? (
                                <UIActivityIndicator size={indicatorSize} color={globalWhite} />
                            ) : (
                                <Text>{t('buttons.saveChanges')}</Text>
                            )}
                        </SubmitFormButton>
                    </CenterRowPaddingTop>
                </Content>
            )}
        </Formik>
    );
};

export default ProfileForm;
