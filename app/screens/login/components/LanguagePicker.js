import React from 'react';
import { Grid, Col, Item, Picker, Icon } from 'native-base';
import { LanguageRow, PickerColumn } from '../styles/loginStyles';
import { placeholderStyle, placeholderIconColor } from '../styles/languagePickerStyles';

const LanguagePicker = props => {
    const { languages } = { ...props };
    const PickerItems = languages.map(language => (
        <Picker.Item label={language.id} value={language.id} key={language.id} />
    ));
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
                            placeholderIconColor={placeholderIconColor}
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
