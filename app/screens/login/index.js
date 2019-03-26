import React from 'react';

import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { globalGreen } from '../../shared/constants/Colors';
import { GlobalSpinnerContainer, GlobalContainer } from '../../shared/styles/common';
import LanguagePicker from './components/LanguagePicker';
import { loadConfig } from './state/actions';
import { loadingSelector, languagesSelector } from './state/selectors';

class LoginScreen extends React.Component {
    async componentWillMount() {
        const { getConfig } = { ...this.props };
        getConfig();
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
    loading: loadingSelector(state),
    languages: languagesSelector(state),
});

const mapDispatchToProps = dispatch => ({
    getConfig: () => dispatch(loadConfig()),
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'config' }])
)(LoginScreen);
