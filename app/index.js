import React from 'react';
import { createAppContainer } from 'react-navigation';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import globalSelectors from './shared/state/selectors';
import globalActions from './shared/state/actions';
import RootNavigator from './navigation/RootNavigator';
import GlobalLoader from './shared/components/GlobalLoader';

const AppContainer = createAppContainer(RootNavigator);

class Application extends React.Component {
    componentWillMount() {
        const { getConfig } = { ...this.props };
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
    loading: globalSelectors.loadingSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getConfig: () => dispatch(globalActions.loadConfig())
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'config' }])
)(Application);
