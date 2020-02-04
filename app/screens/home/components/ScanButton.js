import React from 'react';
import { UIActivityIndicator } from 'react-native-indicators';
import I18n from 'i18n-js';
import { globalWhite } from '../../../shared/constants/colors';
import {
    ScanButton,
    ScanButtonText,
    indicatorSize,
    ButtonRow,
    LoadingIndicator,
    LoadingIndicatorText
} from '../styles/scanButtonStyles';

const ScanButtonElement = props => {
    const { isScanLoading, scan, scanStatusMessage, t } = { ...props, ...I18n };

    return (
        <ButtonRow>
            <ScanButton onPress={() => scan()} disabled={isScanLoading}>
                {isScanLoading ? (
                    <LoadingIndicator>
                        <LoadingIndicatorText>{scanStatusMessage}</LoadingIndicatorText>
                        <UIActivityIndicator size={indicatorSize} color={globalWhite} />
                    </LoadingIndicator>
                ) : (
                    <ScanButtonText>{t('buttons.scan')}</ScanButtonText>
                )}
            </ScanButton>
        </ButtonRow>
    );
};

export default ScanButtonElement;
