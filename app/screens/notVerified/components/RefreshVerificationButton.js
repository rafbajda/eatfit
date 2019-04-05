import React from 'react';
import { UIActivityIndicator } from 'react-native-indicators';
import { Text } from 'native-base';
import { globalWhite } from '../../../shared/constants/colors';
import {
    RefreshRow,
    RefreshButton,
    RefreshButtonTextStyle,
} from '../styles/refreshVerificationButtonStyles';

const RefreshVerificationButton = props => {
    const { nav, isAuthLoading, checkVerification } = { ...props };
    return (
        <RefreshRow>
            <RefreshButton onPress={() => checkVerification(nav)} disabled={isAuthLoading}>
                {isAuthLoading ? (
                    <UIActivityIndicator size={30} color={globalWhite} />
                ) : (
                    <Text style={RefreshButtonTextStyle}>Refresh verification status</Text>
                )}
            </RefreshButton>
        </RefreshRow>
    );
};

export default RefreshVerificationButton;
