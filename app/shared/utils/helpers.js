import * as _ from 'lodash';

const completeSideBarListWithActions = (items, actions) =>
    items.map(item => ({ ...item, action: actions[item.id] }));

const getDateFromFirebaseTimestamp = timestamp => {
    const { seconds, nanoseconds, _seconds, _nanoseconds } = { ...timestamp };
    if (seconds || nanoseconds) {
        return new Date(seconds * 1000 + nanoseconds * 0.000001);
    }
    return new Date(_seconds * 1000 + _nanoseconds * 0.000001);
};

const normalizeKeysToCamelCase = obj => {
    return _.mapKeys(obj, (val, key) => _.camelCase(key));
};

const createUserObjectEmail = data => ({
    uid: data.uid || null,
    email: data.email || null,
    emailVerified: data.emailVerified || false,
    newsletter: data.newsletter || false,
    loginProvider: 'email',
    language: data.language || null,
    isSocial: false
});

const createUserObjectFacebook = data => ({
    uid: data.user.uid || null,
    firstName: data.additionalUserInfo.profile.first_name || null,
    lastName: data.additionalUserInfo.profile.last_name || null,
    email: data.user.email || null,
    emailVerified: data.user.emailVerified || false,
    photoUrl: data.user.photoURL || null,
    loginProvider: data.additionalUserInfo.providerId || null,
    language: data.additionalUserInfo.profile.locale || null,
    isSocial: true
});

const createUserObjectGoogle = data => ({
    uid: data.user.uid || null,
    firstName: data.additionalUserInfo.profile.given_name || null,
    lastName: data.additionalUserInfo.profile.family_name || null,
    email: data.user.email || null,
    emailVerified: data.user.emailVerified || false,
    photoUrl: data.user.photoURL || null,
    loginProvider: data.additionalUserInfo.providerId || null,
    language: data.additionalUserInfo.profile.locale || null,
    isSocial: true
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

export default {
    getDateFromFirebaseTimestamp,
    normalizeKeysToCamelCase,
    createUserObjectByProvider,
    completeSideBarListWithActions
};
