import React from 'react';
import { connect } from 'react-redux';
import { UIActivityIndicator } from 'react-native-indicators';
import GlobalHeader from '../../shared/components/GlobalHeader';
import { GlobalContainer, CenterContainer, CenterRow } from '../../shared/styles/common';
import globalSelectors from '../../shared/state/selectors';
import GlobalLoader from '../../shared/components/GlobalLoader';
import { globalWhite } from '../../shared/constants/colors';
import actions from './state/actions';
import selectors from './state/selectors';
import { ScanButton, ScanButtonText } from './styles/homeStyles';
import screens from '../../navigation/screens';

const HomeScreen = props => {
    const { navigation, user, isAuthLoading, isScanLoading, scan } = { ...props };

    if (isAuthLoading) {
        return <GlobalLoader />;
    }
    // development purpose
    navigation.navigate(screens.ScanDetails);
    return (
        <GlobalContainer>
            <GlobalHeader nav={navigation} avatar={user && user.photoUrl ? user.photoUrl : null} />
            <CenterContainer>
                <CenterRow>
                    <ScanButton onPress={() => scan()} disabled={isScanLoading}>
                        {isScanLoading ? (
                            <UIActivityIndicator size={30} color={globalWhite} />
                        ) : (
                            <ScanButtonText>Scan</ScanButtonText>
                        )}
                    </ScanButton>
                </CenterRow>
            </CenterContainer>
        </GlobalContainer>
    );
};

const mapStateToProps = state => ({
    user: globalSelectors.userSelector(state),
    isAuthLoading: globalSelectors.authLoadingSelector(state),
    isScanLoading: selectors.scansLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
    scan: () => dispatch(actions.makeScan()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
