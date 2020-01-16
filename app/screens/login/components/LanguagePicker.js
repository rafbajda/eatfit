import React from 'react';
import { Grid, Col, Item, Picker, Icon } from 'native-base';
import { LanguageRow, PickerColumn } from '../styles/loginStyles';
import styles from '../styles/languagePickerStyles';
import { deepBlue } from '../../../shared/constants/colors';

const LanguagePicker = props => {
    const {
        languages,
        setCurrentLanguage,
        currentLanguage,
        hidden,
        placeholderStyle
    } = {
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
        <Grid>
            <LanguageRow>
                <Col />
                <Col />
                <PickerColumn>
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholderStyle={placeholderStyle}
                            placeholderIconColor={deepBlue}
                            selectedValue={currentLanguage}
                            onValueChange={language =>
                                setCurrentLanguage(language)
                            }
                        >
                            {PickerItems}
                        </Picker>
                    </Item>
                </PickerColumn>
            </LanguageRow>
        </Grid>
    );
};

export default LanguagePicker;
