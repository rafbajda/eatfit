import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import GlobalHeader from '../../shared/components/GlobalHeader';
import { GlobalContainer, CenterContainer } from '../../shared/styles/common';
import globalSelectors from '../../shared/state/selectors';
import GlobalLoader from '../../shared/components/GlobalLoader';
import { globalGreen } from '../../shared/constants/colors';
import actions from './state/actions';

class HomeScreen extends React.Component {
    render() {
        const { navigation, user, isAuthLoading, scan } = { ...this.props };

        if (isAuthLoading) {
            return <GlobalLoader />;
        }
        return (
            <GlobalContainer>
                <GlobalHeader
                    nav={navigation}
                    avatar={user && user.photoUrl ? user.photoUrl : null}
                />
                <CenterContainer>
                    <Button
                        title="Scan"
                        titleStyle={{
                            fontSize: 30,
                        }}
                        buttonStyle={{
                            backgroundColor: globalGreen,
                            height: 80,
                            width: 200,
                        }}
                        onPress={() => scan(this.camera)}
                    />
                </CenterContainer>
            </GlobalContainer>
        );
    }
}

const mapStateToProps = state => ({
    user: globalSelectors.userSelector(state),
    isAuthLoading: globalSelectors.authLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    scan: () => dispatch(actions.makeScan()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
