import React from 'react';
import { Picker, Icon, Grid, Col } from 'native-base';
import { isArray } from 'lodash';
import { deepBlue } from '../../../shared/constants/colors';
import styles, {
    ProfileLanguageRow,
    ProfilePickerColumn
} from '../styles/profileLanguagePickerStyles';

const ProfileLanguagePicker = props => {
    const { languages, placeholderStyle, userLanguage, setUserLanguage } = {
        ...props,
        ...styles
    };
    const finalLanguages = isArray(languages) ? languages : [];

    const PickerItems = finalLanguages.map(language => (
        <Picker.Item
            label={language.label}
            value={language.id}
            key={language.id}
        />
    ));

    return (
        <Grid>
            <ProfileLanguageRow>
                <Col />
                <Col />
                <ProfilePickerColumn>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        placeholderStyle={placeholderStyle}
                        placeholderIconColor={deepBlue}
                        selectedValue={userLanguage}
                        onValueChange={language => setUserLanguage(language)}
                    >
                        {PickerItems}
                    </Picker>
                </ProfilePickerColumn>
            </ProfileLanguageRow>
        </Grid>
    );
};

export default ProfileLanguagePicker;
