import React from 'react';
import { connect } from 'react-redux';
import { CenterContainer, GlobalContainer } from '../../shared/styles/common';
import validationSchemas from '../../shared/utils/validationSchemas';
import actions from './state/actions';
import selectors from './state/selectors';
import globalSelectors from '../../shared/state/selectors';
import ProfileImage from './components/ProfileImage';
import ProfileForm from './components/ProfileForm';
import ProfileLanguagePicker from './components/ProfileLanguagePicker';

const ProfileScreen = props => {
    const {
        isAuthLoading,
        profile,
        profileSchema,
        changeAvatar,
        updateProfile,
        languages,
        currentLanguage,
        setUserLanguage
    } = {
        ...props,
        ...validationSchemas
    };

    return (
        <GlobalContainer>
            <ProfileLanguagePicker
                languages={languages}
                userLanguage={currentLanguage}
                setUserLanguage={setUserLanguage}
            />
            <ProfileImage changeAvatar={changeAvatar} profile={profile} />
            <ProfileForm
                profile={profile}
                profileSchema={profileSchema}
                isAuthLoading={isAuthLoading}
                updateProfile={updateProfile}
            />
        </GlobalContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    setUserLanguage: language => dispatch(actions.setUserLanguage(language)),
    changeAvatar: () => dispatch(actions.changeAvatar()),
    updateProfile: profile => dispatch(actions.updateUser(profile))
});

const mapStateToProps = state => ({
    profile: selectors.profileSelector(state),
    isAuthLoading: globalSelectors.authLoadingSelector(state),
    languages: globalSelectors.languagesSelector(state),
    currentLanguage: globalSelectors.pickedLanguageSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
