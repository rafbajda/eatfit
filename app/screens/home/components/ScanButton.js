import React from 'react';
import { UIActivityIndicator } from 'react-native-indicators';
import { CenterContainer, CenterRow } from '../../../shared/styles/common';
import { globalWhite } from '../../../shared/constants/colors';
import { ScanButton, ScanButtonText, indicatorSize } from '../styles/scanButtonStyles';

const ScanButtonElement = props => {
    const { isScanLoading, scan } = { ...props };

    return (
        <CenterContainer>
            <CenterRow>
                <ScanButton onPress={() => scan()} disabled={isScanLoading}>
                    {isScanLoading ? (
                        <UIActivityIndicator size={indicatorSize} color={globalWhite} />
                    ) : (
                        <ScanButtonText>Scan</ScanButtonText>
                    )}
                </ScanButton>
            </CenterRow>
        </CenterContainer>
    );
};

export default ScanButtonElement;
