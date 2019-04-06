/* eslint-disable no-underscore-dangle */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { loadingSelector } from './shared/state/selectors';
import { loadConfig } from './shared/state/actions';
import RootNavigator from './navigation/RootNavigator';
import GlobalLoader from './shared/components/GlobalLoader';
import firebaseOperations from './shared/utils/firebaseOperations';

const AppContainer = createAppContainer(RootNavigator);

class Application extends React.Component {
    componentWillMount() {
        const { getConfig } = { ...this.props };
        firebaseOperations.signOut();
        getConfig();
    }

    render() {
        const { loading, firebase } = { ...this.props };

        if (loading || firebase.isInitializing) {
            return <GlobalLoader />;
        }
        return <AppContainer />;
    }
}

const mapStateToProps = state => ({
    loading: loadingSelector(state),
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
)(Application);
