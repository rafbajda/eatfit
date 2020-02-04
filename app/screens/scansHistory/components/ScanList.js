import React from 'react';
import { Content } from 'native-base';
import hps from '../utils/helpers';

const ScanList = props => {
    // eslint-disable-next-line react/prop-types
    const { scans, action } = props;
    const scanList = hps.getScansList(scans, action);
    return <Content>{scanList}</Content>;
};

export default ScanList;
