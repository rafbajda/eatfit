import React from 'react';
import { Text, Content, Item, Input } from 'native-base';
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
import { globalWhite } from '../../shared/constants/colors';

const ProfileScreen = props => {
    const { isAuthLoading, user, profileInitialValues, profileSchema } = {
        ...props,
        ...formInitialValues,
        ...validationSchemas,
    };
    console.log(hps.getInitialsFromUser(user));
    return (
        <CenterContainer>
            <Avatar
                title={hps.getInitialsFromUser(user)}
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
                                <Item regular>
                                    <Input
                                        placeholder="First name"
                                        onChangeText={formikProps.handleChange('firstName')}
                                        onBlur={formikProps.handleBlur('firstName')}
                                        disabled={isAuthLoading}
                                    />
                                </Item>
                                <ErrorText>
                                    {formikProps.touched.firstName && formikProps.errors.firstName}
                                </ErrorText>
                                <Item regular>
                                    <Input
                                        placeholder="Last Name"
                                        onChangeText={formikProps.handleChange('lastName')}
                                        onBlur={formikProps.handleBlur('lastName')}
                                        disabled={isAuthLoading}
                                    />
                                </Item>
                                <ErrorText>
                                    {formikProps.touched.lastName && formikProps.errors.lastName}
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
