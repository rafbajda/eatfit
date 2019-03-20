import React from 'react';
import { Grid, Col, Item, Picker, Icon } from 'native-base';
import { LanguageRow, PickerColumn } from '../styles/loginStyles';

export default class LanguagePicker extends React.Component {
    render() {
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
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: '#bfc6ea' }}
                                placeholderIconColor="#007aff"
                            >
                                <Picker.Item label="Eng" value="en" />
                                <Picker.Item label="Pol" value="pl" />
                            </Picker>
                        </Item>
                    </PickerColumn>
                </LanguageRow>
            </Grid>
        );
    }
}
