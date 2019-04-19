import React from 'react';
import { Text, Content, Item, Input, DatePicker, Icon } from 'native-base';
import { Formik } from 'formik';
import { UIActivityIndicator } from 'react-native-indicators';
import {
    CenterRow,
    CenterFormContainerPaddingTop,
    ErrorText,
    SubmitFormButton,
    CenterRowPaddingTop,
} from '../../../shared/styles/common';
import { globalWhite, mediumGrey } from '../../../shared/constants/colors';
import formInitialValues from '../../../shared/constants/formInitialValues';

const ProfileForm = props => {
    const { profileSchema, isAuthLoading, profile, updateProfile } = { ...props };
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
                                    placeholder="Your name"
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
                                    placeholder="Your last name"
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
                                    maximumDate={new Date()}
                                    locale="en"
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType="slide"
                                    androidMode="spinner"
                                    placeHolderText={
                                        formikProps.values.birthday ? null : 'Your Birthday date'
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
                                <UIActivityIndicator size={30} color={globalWhite} />
                            ) : (
                                <Text>Save changes</Text>
                            )}
                        </SubmitFormButton>
                    </CenterRowPaddingTop>
                </Content>
            )}
        </Formik>
    );
};

export default ProfileForm;
