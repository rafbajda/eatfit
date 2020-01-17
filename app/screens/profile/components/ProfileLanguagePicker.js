import React from 'react';
import { deepBlue } from '../../../shared/constants/colors';
import { Picker, Icon } from 'native-base';
import styles from '../styles/profileLanguagePickerStyles';

const ProfileLanguagePicker = props => {
    const { languages, placeholderStyle } = {
        ...props,
        ...styles
    };
    const PickerItems = languages.map(language => (
        <Picker.Item
            label={language.label}
            value={language.id}
            key={language.id}
        />
    ));
    console.log(languages, props);

    if (hidden) {
        return null;
    }
    return (
        <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            placeholderStyle={placeholderStyle}
            placeholderIconColor={deepBlue}
            selectedValue={currentLanguage}
            onValueChange={language => setCurrentLanguage(language)}
        >
            {PickerItems}
        </Picker>
    );
};

export default ProfileLanguagePicker;
