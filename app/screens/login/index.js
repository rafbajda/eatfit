/* eslint-disable global-require */
import React from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Spinner } from 'native-base';
import { globalGreen } from '../../shared/constants/Colors';
import { GlobalSpinnerContainer, GlobalContainer } from '../../shared/styles/common';
import LanguagePicker from './components/LanguagePicker';
import { db } from '../../../Firebase';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.ref = db.collection('config');
        this.getAvailableLanguages = this.getAvailableLanguages.bind(this);
        this.state = { loading: true, languages: [] };
    }

    // TODO: get rid of these imports by adding font assets
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        await this.getAvailableLanguages();
    }

    async getAvailableLanguages() {
        this.ref
            .doc('language')
            .get()
            .then(doc => {
                if (doc.exists) {
                    const { availableLanguages } = { ...doc.data() };
                    this.setState({ loading: false, languages: availableLanguages });
                }
                throw new Error("Document doesn't exist");
            })
            .catch(() => {
                throw new Error('An error ocurred while getting the document');
            });
    }

    render() {
        const { loading, languages } = { ...this.state };

        if (loading) {
            return (
                <GlobalSpinnerContainer>
                    <Spinner color={globalGreen} />
                </GlobalSpinnerContainer>
            );
        }
        return (
            <GlobalContainer>
                <LanguagePicker languages={languages} />
            </GlobalContainer>
        );
    }
}
