import React from 'react';
import hps from '../utils/helpers';
import { Content } from 'native-base';

const ScanList = props => {
    const { scans, action } = props;
    const scanList = hps.getScansList(scans, action);
    return <Content>{scanList}</Content>;
};

export default ScanList;
