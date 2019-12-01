import React from 'react';
import { UIActivityIndicator } from 'react-native-indicators';
import { Text } from 'native-base';
import { globalWhite } from '../../../shared/constants/colors';
import styles, { RefreshRow, RefreshButton } from '../styles/refreshVerificationButtonStyles';

const RefreshVerificationButton = props => {
    const { isAuthLoading, checkVerification, RefreshButtonTextStyle } = {
        ...props,
        ...styles,
    };
    return (
        <RefreshRow>
            <RefreshButton onPress={() => checkVerification()} disabled={isAuthLoading}>
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
