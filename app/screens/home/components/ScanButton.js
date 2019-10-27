import React from 'react';
import { UIActivityIndicator } from 'react-native-indicators';
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
    const { isScanLoading, scan, scanStatusMessage } = { ...props };

    return (
        <ButtonRow>
            <ScanButton onPress={() => scan()} disabled={isScanLoading}>
                {isScanLoading ? (
                    <LoadingIndicator>
                        <LoadingIndicatorText>
                            {scanStatusMessage}
                        </LoadingIndicatorText>
                        <UIActivityIndicator
                            size={indicatorSize}
                            color={globalWhite}
                        />
                    </LoadingIndicator>
                ) : (
                    <ScanButtonText>Scan</ScanButtonText>
                )}
            </ScanButton>
        </ButtonRow>
    );
};

export default ScanButtonElement;
