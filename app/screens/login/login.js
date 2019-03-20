/* eslint-disable global-require */
import React from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Spinner } from 'native-base';
import firebase from 'react-native-firebase';
import { globalGreen } from '../../shared/constants/Colors';
import { GlobalSpinnerContainer, GlobalContainer } from '../../shared/styles/common';
import LanguagePicker from './components/LanguagePicker';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('config ');
        this.state = { loading: true };
    }

    // TODO: get rid of these imports by adding font assets
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ loading: false });
    }

    render() {
        const { loading } = { ...this.state };

        if (loading) {
            return (
                <GlobalSpinnerContainer>
                    <Spinner color={globalGreen} />
                </GlobalSpinnerContainer>
            );
        }
        return (
            <GlobalContainer>
                <LanguagePicker />
            </GlobalContainer>
        );
    }
}
