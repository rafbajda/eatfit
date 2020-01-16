import React from 'react';
import { connect } from 'react-redux';
import { CenterContainer } from '../../shared/styles/common';
import validationSchemas from '../../shared/utils/validationSchemas';
import actions from './state/actions';
import selectors from './state/selectors';
import globalSelectors from '../../shared/state/selectors';
import ProfileImage from './components/ProfileImage';
import ProfileForm from './components/ProfileForm';

const ProfileScreen = props => {
    const {
        isAuthLoading,
        profile,
        profileSchema,
        changeAvatar,
        updateProfile
    } = {
        ...props,
        ...validationSchemas
    };

    return (
        <CenterContainer>
            <ProfileImage changeAvatar={changeAvatar} profile={profile} />
            <ProfileForm
                profile={profile}
                profileSchema={profileSchema}
                isAuthLoading={isAuthLoading}
                updateProfile={updateProfile}
            />
        </CenterContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    changeAvatar: () => dispatch(actions.changeAvatar()),
    updateProfile: profile => dispatch(actions.updateUser(profile))
});

const mapStateToProps = state => ({
    profile: selectors.profileSelector(state),
    isAuthLoading: globalSelectors.authLoadingSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
