import React from 'react';
import { deepBlue } from '../../../shared/constants/colors';
import { Picker, Icon, Grid, Col } from 'native-base';
import styles, {
    ProfileLanguageRow,
    ProfilePickerColumn
} from '../styles/profileLanguagePickerStyles';

const ProfileLanguagePicker = props => {
    const { languages, placeholderStyle, userLanguage, setUserLanguage } = {
        ...props,
        ...styles
    };
    console.log('props: ', props);
    const PickerItems = languages.map(language => (
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
