import React from 'react';
import { UIActivityIndicator } from 'react-native-indicators';
import { Text } from 'native-base';
import { globalWhite } from '../../../shared/constants/colors';
import styles, {
    RefreshRow,
    RefreshButton
} from '../styles/refreshVerificationButtonStyles';
import I18n from 'i18n-js';

const RefreshVerificationButton = props => {
    const { isAuthLoading, checkVerification, RefreshButtonTextStyle, t } = {
        ...props,
        ...styles,
        ...I18n
    };
    return (
        <RefreshRow>
            <RefreshButton
                onPress={() => checkVerification()}
                disabled={isAuthLoading}
            >
                {isAuthLoading ? (
                    <UIActivityIndicator size={30} color={globalWhite} />
                ) : (
                    <Text style={RefreshButtonTextStyle}>
                        {t('buttons.refreshVerificationStatus')}
                    </Text>
                )}
            </RefreshButton>
        </RefreshRow>
    );
};

export default RefreshVerificationButton;
