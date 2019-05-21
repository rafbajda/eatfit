import React from 'react';
import { Row, Col } from 'native-base';

import SubstanceImage from './SubstanceImage';
import SubstanceInformation from './SubstanceInformation';

const SubstanceInformationsRow = props => {
    const { imageUrl, substanceName } = { ...props };
    return (
        <Row style={{ height: 200 }}>
            <Col>
                <SubstanceImage imageUrl={imageUrl} />
            </Col>
            <Col>
                <SubstanceInformation substanceName={substanceName} />
            </Col>
        </Row>
    );
};

export default SubstanceInformationsRow;
