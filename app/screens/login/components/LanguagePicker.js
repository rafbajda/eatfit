import React from 'react';
import { Grid, Col, Item, Picker, Icon } from 'native-base';
import { connect } from 'react-redux';
import { LanguageRow, PickerColumn } from '../styles/loginStyles';
import { placeholderStyle, placeholderIconColor } from '../styles/languagePickerStyles';
import { setLanguage } from '../state/actions';
import { pickedLanguageSelector } from '../state/selectors';

const LanguagePicker = props => {
    const { languages, setCurrentLanguage, currentLanguage } = { ...props };
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
                            selectedValue={currentLanguage}
                            onValueChange={language => setCurrentLanguage(language)}
                        >
                            {PickerItems}
                        </Picker>
                    </Item>
                </PickerColumn>
            </LanguageRow>
        </Grid>
    );
};

const mapStateToProps = state => ({
    currentLanguage: pickedLanguageSelector(state),
});

const mapDispatchToProps = dispatch => ({
    setCurrentLanguage: language => dispatch(setLanguage(language)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguagePicker);
