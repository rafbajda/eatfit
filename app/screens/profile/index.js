import React from 'react';
import { Text, Content, Item, Input, DatePicker, Label } from 'native-base';
import { connect } from 'react-redux';
import { Avatar } from 'react-native-elements';
import { Formik } from 'formik';
import { UIActivityIndicator } from 'react-native-indicators';
import {
    CenterContainer,
    CenterRow,
    CenterFormContainerPaddingTop,
    ErrorText,
    SubmitFormButton,
} from '../../shared/styles/common';
import globalSelectors from '../../shared/state/selectors';
import hps from '../../shared/utils/helpers';
import formInitialValues from '../../shared/constants/formInitialValues';
import validationSchemas from '../../shared/utils/validationSchemas';
import { globalWhite, mediumGrey, lightGrey } from '../../shared/constants/colors';

const ProfileScreen = props => {
    const { isAuthLoading, user, profileSchema } = {
        ...props,
        ...validationSchemas,
    };
    const profileInitialValues = formInitialValues.getProfileInitialValues(user);
    const initials = hps.getInitialsFromUser(user);
    return (
        <CenterContainer>
            <Avatar
                containerStyle={{ marginTop: 20 }}
                title={initials}
                size={130}
                source={{
                    uri: user.photoUrl,
                }}
                rounded
                showEditButton
            />
            <Formik
                initialValues={profileInitialValues}
                onSubmit={values => console.log(values)}
                validationSchema={profileSchema}
            >
                {formikProps => (
                    <Content>
                        <CenterRow>
                            <CenterFormContainerPaddingTop>
                                <Item stackedLabel>
                                    <Label style={{ color: mediumGrey }}>First name</Label>
                                    <Input
                                        style={{
                                            paddingLeft: 6,
                                        }}
                                        placeholder="Your name"
                                        placeholderTextColor={lightGrey}
                                        onChangeText={formikProps.handleChange('firstName')}
                                        onBlur={formikProps.handleBlur('firstName')}
                                        disabled={isAuthLoading}
                                    />
                                </Item>
                                <ErrorText>
                                    {formikProps.touched.firstName && formikProps.errors.firstName}
                                </ErrorText>
                                <Item stackedLabel>
                                    <Label>Last name</Label>
                                    <Input
                                        style={{
                                            paddingLeft: 6,
                                        }}
                                        placeholder="Your last name"
                                        placeholderTextColor={lightGrey}
                                        onChangeText={formikProps.handleChange('lastName')}
                                        onBlur={formikProps.handleBlur('lastName')}
                                        disabled={isAuthLoading}
                                    />
                                </Item>
                                <ErrorText>
                                    {formikProps.touched.lastName && formikProps.errors.lastName}
                                </ErrorText>
                                <Item
                                    style={{
                                        display: 'flex',
                                        paddingLeft: 0,
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                    }}
                                    stackedLabel
                                >
                                    <Label>Birthday</Label>
                                    <DatePicker
                                        style={{
                                            paddingLeft: 0,
                                            marginLeft: 0,
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                        }}
                                        maximumDate={new Date()}
                                        locale="en"
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType="slide"
                                        androidMode="spinner"
                                        placeHolderText="Your Birthday date"
                                        textStyle={{
                                            paddingLeft: 0,
                                            marginLeft: 0,
                                            // justifyContent: 'flex-start',
                                        }}
                                        placeHolderTextStyle={{ color: lightGrey }}
                                        onDateChange={formikProps.handleChange('birthday')}
                                        onBlur={formikProps.handleBlur('birthday')}
                                        disabled={isAuthLoading}
                                    />
                                </Item>
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
                                    <Text>Save changes</Text>
                                )}
                            </SubmitFormButton>
                        </CenterRow>
                    </Content>
                )}
            </Formik>
        </CenterContainer>
    );
};

const mapStateToProps = state => ({
    user: globalSelectors.userSelector(state),
    isAuthLoading: globalSelectors.authLoadingSelector(state),
});

export default connect(mapStateToProps)(ProfileScreen);
