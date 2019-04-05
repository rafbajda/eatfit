import React from 'react';
import { PacmanIndicator } from 'react-native-indicators';
import { GlobalSpinnerContainer } from '../styles/common';
import { globalGreen } from '../constants/colors';

const GlobalLoader = () => (
    <GlobalSpinnerContainer>
        <PacmanIndicator color={globalGreen} size={200} />
    </GlobalSpinnerContainer>
);

export default GlobalLoader;
