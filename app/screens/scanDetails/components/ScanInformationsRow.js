import React from 'react';
import { Row, Col } from 'native-base';
import ScanImage from './ScanImage';
import ScanInformations from './ScanInformations';

const ScanInformationsRow = props => {
    const { scanUrl, scanScore } = props;

    return (
        <Row style={{ height: 200 }}>
            <Col>
                <ScanImage scanUrl={scanUrl} />
            </Col>
            <Col>
                <ScanInformations
                    score={scanScore}
                />
            </Col>
        </Row>
    );
};

export default ScanInformationsRow;
