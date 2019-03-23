/* eslint-disable global-require */
import React from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import { globalGreen } from '../../shared/constants/Colors';
import { GlobalSpinnerContainer, GlobalContainer } from '../../shared/styles/common';
import LanguagePicker from './components/LanguagePicker';
import { db } from '../../../Firebase';
import {
    getFontsAsync,
    getFontsSuccess,
    getAvailableLanguages,
    getAvailableLanguagesSuccess,
    getAvailableLanguagesFailure,
    loadConfig,
    loadConfigDone,
} from './state/actions';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.ref = db.collection('config');
        this.getAvailableLanguages = this.getAvailableLanguages.bind(this);
    }

    // TODO: get rid of these imports by adding font assets
    async componentWillMount() {
        const { dispatchLoadConfig, dispatchGetFontsAsync, dispatchGetFontsSuccess } = {
            ...this.props,
        };
        dispatchLoadConfig();
        dispatchGetFontsAsync();
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        dispatchGetFontsSuccess();
        await this.getAvailableLanguages();
    }

    async getAvailableLanguages() {
        const {
            dispatchGetAvailableLanguages,
            dispatchGetAvailableLanguagesFailure,
            dispatchGetAvailableLanguagesSuccess,
            dispatchLoadConfigDone,
        } = { ...this.props };
        dispatchGetAvailableLanguages();
        this.ref
            .doc('language')
            .get()
            .then(doc => {
                if (doc.exists) {
                    const { availableLanguages } = { ...doc.data() };
                    dispatchGetAvailableLanguagesSuccess(availableLanguages);
                    dispatchLoadConfigDone();
                }
                const errorMsg = "Document doesn't exist";
                dispatchGetAvailableLanguagesFailure(errorMsg);
                throw new Error(errorMsg);
            })
            .catch(() => {
                const errorMsg = 'An error ocurred while getting the document';
                dispatchGetAvailableLanguagesFailure(errorMsg);
                throw new Error(errorMsg);
            });
    }

    render() {
        const { loading, languages } = { ...this.props };

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

const mapStateToProps = state => ({
    loading: state.config.isDataLoading,
    languages: state.config.languages,
});

const mapDispatchToProps = dispatch => ({
    dispatchLoadConfig: () => dispatch(loadConfig),
    dispatchGetFontsAsync: () => dispatch(getFontsAsync),
    dispatchGetFontsSuccess: () => dispatch(getFontsSuccess),
    dispatchGetAvailableLanguages: () => dispatch(getAvailableLanguages),
    dispatchGetAvailableLanguagesSuccess: languages =>
        dispatch(getAvailableLanguagesSuccess(languages)),
    dispatchGetAvailableLanguagesFailure: errorMessage =>
        dispatch(getAvailableLanguagesFailure(errorMessage)),
    dispatchLoadConfigDone: () => dispatch(loadConfigDone),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);
