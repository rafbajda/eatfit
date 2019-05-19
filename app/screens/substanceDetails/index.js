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

const mockedSubstance = {
    name: 'płatki owsiane',
    description:
        'Regularne jedzenie płatków owsianych wpływa korzystnie na nasz organizm. W 100 gramach płatków można znaleźć tylko 378 kcal i aż 12 g białka. Do tego płatki owsiane zwykłe w 100 gramach zawierają: 10 g błonnika, Witaminy z grupy B,  128 mg magnezu, 410 mg fosforu, 3,63 mg  manganu.',
    image_url:
        'https://firebasestorage.googleapis.com/v0/b/eat-fit7.appspot.com/o/substances%2F5SVNg8pfVJMSmx6FpPfL%2Fsubstance_image.jpg?alt=media&token=794ef162-d8de-4b1d-bca1-bed144c4c45a',
    id: '5SVNg8pfVJMSmx6FpPfL',
};

const SubstanceDetailsScreen = props => {
    return (
        <Container>
            <Grid>
                <Row style={{ height: 200 }}>
                    <Col>
                        <ImageContainer>
                            <Image
                                source={{ uri: mockedSubstance.image_url }}
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
                            <Text>{mockedSubstance.name}</Text>
                        </SubstanceInformationContainer>
                    </Col>
                </Row>
                <Row>
                    <Content>
                        <SubstanceInformationLabel>Description:</SubstanceInformationLabel>
                        <Text>{mockedSubstance.description}</Text>
                    </Content>
                </Row>
            </Grid>
        </Container>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubstanceDetailsScreen);
