import * as _ from 'lodash';

const normalizeKeysToCamelCase = obj => {
    return _.mapKeys(obj, (val, key) => _.camelCase(key));
};

const getInitialsFromUser = user => user.firstName[0].concat(user.lastName[0]).toUpperCase();

const createUserObjectEmail = data => ({
    uid: data.uid || null,
    email: data.email || null,
    emailVerified: data.emailVerified || false,
    newsletter: data.newsletter || false,
    loginProvider: 'email',
    isSocial: false,
});

const createUserObjectFacebook = data => ({
    uid: data.user.uid || null,
    firstName: data.additionalUserInfo.profile.first_name || null,
    lastName: data.additionalUserInfo.profile.last_name || null,
    email: data.user.email || null,
    emailVerified: data.user.emailVerified || false,
    photoUrl: data.user.photoURL || null,
    loginProvider: data.additionalUserInfo.providerId || null,
    isSocial: true,
});

const createUserObjectGoogle = data => ({
    uid: data.user.uid || null,
    firstName: data.additionalUserInfo.profile.given_name || null,
    lastName: data.additionalUserInfo.profile.family_name || null,
    email: data.user.email || null,
    emailVerified: data.user.emailVerified || false,
    photoUrl: data.user.photoURL || null,
    loginProvider: data.additionalUserInfo.providerId || null,
    isSocial: true,
});

const createUserObjectByProvider = (provider, data) => {
    switch (provider) {
        case 'facebook.com':
            return createUserObjectFacebook(data);
        case 'google.com':
            return createUserObjectGoogle(data);
        default:
            return createUserObjectEmail(data);
    }
};

const checkBoxSetter = (props, fieldName) => {
    props.setFieldValue(fieldName, !props.values[fieldName]);
    props.setFieldTouched(fieldName, true);
};

export default {
    normalizeKeysToCamelCase,
    createUserObjectByProvider,
    checkBoxSetter,
    getInitialsFromUser,
};
