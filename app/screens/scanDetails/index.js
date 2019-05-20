import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Col, Text, Row, Content } from 'native-base';
import { Image, ListItem } from 'react-native-elements';
import {
    ImageContainer,
    ScanInformationLabel,
    ScanInformationContainer,
} from './styles/scanDetailsStyles';
import { globalGreen, lightGrey } from '../../shared/constants/colors';
import hps from '../../shared/utils/helpers';
import actions from './state/actions';
import selectors from './state/selectors';

const defaultSubstanceImage = require('../../assets/images/default_substance.png');

const ScanDetailsScreen = props => {
    const { goToSubstanceDetails, scan } = { ...props };
    const scanCreationDate = hps.getScanDate(scan.createdAt);

    const substanceList = scan.substances.map(sub => {
        const source = sub.image ? { uri: sub.image } : defaultSubstanceImage;
        return (
            <ListItem
                containerStyle={{ borderWidth: 1, borderColor: lightGrey }}
                onPress={() => goToSubstanceDetails(sub)}
                key={sub.id}
                leftAvatar={{ source }}
                title={sub.name}
                chevron
            />
        );
    });

    return (
        <Container>
            <Grid>
                <Row style={{ height: 200 }}>
                    <Col>
                        <ImageContainer>
                            <Image
                                source={{ uri: scan.scanUrl }}
                                style={{
                                    height: 150,
                                    borderWidth: 2,
                                    borderColor: globalGreen,
                                }}
                            />
                        </ImageContainer>
                    </Col>
                    <Col>
                        <ScanInformationContainer>
                            <ScanInformationLabel>Created at:</ScanInformationLabel>
                            <Text>{scanCreationDate}</Text>
                            <ScanInformationLabel>Scan name:</ScanInformationLabel>
                            <Text>{scan.name}</Text>
                        </ScanInformationContainer>
                    </Col>
                </Row>
                <Row>
                    <Content>{substanceList}</Content>
                </Row>
            </Grid>
        </Container>
    );
};

const mapStateToProps = state => ({
    scan: selectors.latestScanSelector(state),
});

const mapDispatchToProps = dispatch => ({
    goToSubstanceDetails: substance => dispatch(actions.setSubstanceDetails(substance)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScanDetailsScreen);
