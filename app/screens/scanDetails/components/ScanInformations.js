import React from 'react';
import { Text } from 'native-base';
import hps from '../utils/helpers';
import { ScanInformationContainer, ScanInformationLabel } from '../styles/scanDetailsStyles';

const ScanInformations = props => {
    const { scanCreatedAt, scanName } = { ...props };
    const scanCreationDate = hps.getScanDate(scanCreatedAt);
    return (
        <ScanInformationContainer>
            <ScanInformationLabel>Created at:</ScanInformationLabel>
            <Text>{scanCreationDate}</Text>
            <ScanInformationLabel>Scan name:</ScanInformationLabel>
            <Text>{scanName}</Text>
        </ScanInformationContainer>
    );
};

export default ScanInformations;
