import React from 'react';
import { Row, Col } from 'native-base';
import ScanImage from './ScanImage';
import ScanInformations from './ScanInformations';

const ScanInformationsRow = props => {
    const { scanUrl, scanCreatedAt, scanName } = { ...props };

    return (
        <Row style={{ height: 200 }}>
            <Col>
                <ScanImage scanUrl={scanUrl} />
            </Col>
            <Col>
                <ScanInformations scanCreatedAt={scanCreatedAt} scanName={scanName} />
            </Col>
        </Row>
    );
};

export default ScanInformationsRow;
