import React from 'react';
import { connect } from 'react-redux';
import { Text, Container, Grid, Row, Col, Content } from 'native-base';
import { Image } from 'react-native-elements';
import {
    ImageContainer,
    SubstanceInformationContainer,
    SubstanceInformationLabel,
} from './styles/substanceDetailsStyles';
import { globalGreen } from '../../shared/constants/colors';
import selectors from './state/selectors';

const SubstanceDetailsScreen = props => {
    const { substance } = { ...props };
    return (
        <Container>
            <Grid>
                <Row style={{ height: 200 }}>
                    <Col>
                        <ImageContainer>
                            <Image
                                source={{ uri: substance.imageUrl }}
                                style={{
                                    height: 150,
                                    borderWidth: 2,
                                    borderColor: globalGreen,
                                }}
                            />
                        </ImageContainer>
                    </Col>
                    <Col>
                        <SubstanceInformationContainer>
                            <SubstanceInformationLabel>Name:</SubstanceInformationLabel>
                            <Text>{substance.name}</Text>
                        </SubstanceInformationContainer>
                    </Col>
                </Row>
                <Row>
                    <Content>
                        <SubstanceInformationLabel>Description:</SubstanceInformationLabel>
                        <Text>{substance.description}</Text>
                    </Content>
                </Row>
            </Grid>
        </Container>
    );
};

const mapStateToProps = state => ({
    substance: selectors.getLatestSubstance(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubstanceDetailsScreen);
