import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Col, Text } from 'native-base';
import { Image } from 'react-native-elements';
import {
    ImageContainer,
    DateCreationLabel,
    ScanInformationContainer,
} from './styles/scanDetailsStyles';
import { globalGreen } from '../../shared/constants/colors';
import hps from '../../shared/utils/helpers';

const defaultSubstanceImage = require('../../assets/images/default_substance.png');

const mockedScan = {
    scan_url:
        'https://firebasestorage.googleapis.com/v0/b/eat-fit7.appspot.com/o/substances%2F5SVNg8pfVJMSmx6FpPfL%2Fsubstance_image.jpg?alt=media&token=794ef162-d8de-4b1d-bca1-bed144c4c45a',
    id: 'dITTbyHQn2aBmx8hVCcL',
    created_at: { _seconds: 1558210567, _nanoseconds: 463000000 },
    name: 'scan_1558210567463',
    user_id: '8sqIhUnBmBhVk0qB4hEqL8kwrDn2',
    substances: [
        {
            name: 'płatki owsiane',
            description:
                'Regularne jedzenie płatków owsianych wpływa korzystnie na nasz organizm. W 100 gramach płatków można znaleźć tylko 378 kcal i aż 12 g białka. Do tego płatki owsiane zwykłe w 100 gramach zawierają: 10 g błonnika, Witaminy z grupy B,  128 mg magnezu, 410 mg fosforu, 3,63 mg  manganu.',
            image_url:
                'https://firebasestorage.googleapis.com/v0/b/eat-fit7.appspot.com/o/substanc…2Fsubstance_image.jpg?alt=media&token=794ef162-d8de-4b1d-bca1-bed144c4c45a',
            id: '5SVNg8pfVJMSmx6FpPfL',
        },
        {
            name: 'Tłuszcze nasycone',
            description:
                'Tłuszcze nasycone definiuje się jako związki kwasów tłuszczowych i gliceryny. Podstawę ich wewnętrznej struktury stanowi łańcuch węglowy. Jeśli między poszczególnymi atomami węgla istnieją wiązania pojedyncze, wtedy mamy do czynienia z tłuszczami nasyconymi. Jeśli natomiast choć jedno z wiązań jest podwójne, tłuszcz określa się mianem nienasyconego.  Tłuszcze nasycone najczęściej występują jako bezpostaciowe, białawe ciała stałe. Ponadto, nie są rozpuszczalne w wodzie.  Organizacje zajmujące się żywieniem, na podstawie prowadzonych badań sugerują znaczne ograniczenie tłuszczów nasyconych w codziennej diecie. Zaleca się, żeby pokrywały one maksymalnie 6% zapotrzebowania na energię. Stanowi to około 120 kcal (13 gramów) tłuszczów nasyconych dziennie.',
            id: '99WiWZAZIyXtqKsu1HPf',
        },
        {
            description:
                'Jest ono źródłem wielu cennych składników, np. wapnia, których deficytem odznacza się typowo zachodnia dieta. Szczególnie jednak polecam naturalne produkty mleczne fermentowane ze względu na dodatkową korzyść dla zdrowia ze względu na bakterie probiotyczne oraz mniejszą zawartość cukru.     Doniesienia o szkodliwości mleka najczęściej nie znajdują potwierdzenia w badaniach. Mija się z celem praktykowanie diet eliminacyjnych bez wyraźnej potrzeby. Najczęściej przynosi to więcej szkód niż pożytku.',
            id: 'C11ThzClaRu6LIyDsbGc',
            name: 'mleko',
        },
        {
            name: 'soja',
            substance_id:
                'Soja to roślina, której owocem jest strąk zawierający do czterech nasion różnego koloru i wielkości. Nasiona soi - i produkty na ich bazie - mają wiele właściwości leczniczych, wartości odżywczych i smakowych, dlatego znalazły zastosowanie zarówno w lecznictwie, jak i w kuchni. Nasiona są bardzo bogatym źródłem białka roślinnego w diecie, często uważanego za substytut białka krowiego w żywieniu. Specjaliści do spraw żywienia tłumaczą, że 50 g ziarna sojowego zastępuje półtorej szklanki mleka krowiego lub 150 g wołowiny, tyle że to białko – w przeciwieństwie do zwierzęcego – nie zawiera szkodliwych puryn, które utrudniają przyswajanie wapnia. Drugim ważnym składnikiem są lipidy zawierające m.in. niezbędne nienasycone kwasy tłuszczowe (NNKT), tj. kwas linolowy, kwas oleinowy oraz kwas a-linolenowy. Jednak za najcenniejszy składnik uważa się fitoestrogeny. To grupa związków o budowie i funkcji podobnej do naturalnych estrogenów.',
            id: 'M9mvvPLvoRgAcg25vRq2',
        },
        {
            id: 'XfsZsiOaF6BDTign9neU',
            name: 'Sezam',
            description:
                'Prawie 50% sezamu stanowią tłuszcze, w tym w większości nienasycone kwasy tłuszczowe (omega-3, omega-6 i omega-9). Tym samym sezam mogą spożywać również osoby będące na diecie odchudzającej - nienasycone kwasy tłuszczowe nie odkładają się bowiem w postaci tkanki tłuszczowej i, co więcej, wspomagają jej spalanie. 100 gramów tych nasion dostarcza również prawie 12 gramów błonnika, około 11 gramów przyswajalnych węglowodanów oraz prawie 18 gramów białka. Co ważne, białko zawarte w sezamie zawiera duże ilości tryptofanu. Jest to aminokwas, który bierze udział w syntezie melatoniny, a więc wspomaga zasypianie i podnosi jakość snu. 100 gramów sezamu pokrywa dzienne zapotrzebowanie na tryptofan w ponad 100%, co sprawia, iż do diety powinny włączyć go osoby cierpiące na bezsenność.',
        },
        {
            name: 'Orzechy',
            description:
                'Orzechy są bogatym źródłem nienasyconych kwasów tłuszczowych, białka roślinnego i błonnika. Dostarczają cennych witamin z grupy B, witamin chroniących przed działaniem wolnych rodników, takich jak witaminy A i E. Są też źródłem minerałów - najważniejsze z nich to magnez, potas, żelazo, wapń czy cynk. Składniki te wpływają na prawidłową przemianę materii oraz ograniczają uczucie głodu, jeżeli są dostarczane w odpowiedniej ilości. Dodatkowo orzechy zawierają cenne substancje roślinne biologicznie aktywne, takie jak polifenole, z których to flawonoidy mają poparte naukowo działanie przeciwdziałające rozwojowi chorób metabolicznych oraz ograniczają ryzyko wystąpienia zmian neurologicznych. Najzdrowsze modele odżywiania, jak chociażby dieta śródziemnomorska, zalecają zjadanie garści orzechów dziennie. Jest to w przybliżeniu około 30 g. Jednak ze względu na wysoką kaloryczności i obawy o nadmierne kilogramy wiele osób odmawia sobie takiej. Okazuje się, że niepotrzebnie.',
            id: 'gnAPaS2SvFmP6m7NeOEO',
        },
        {
            id: 'yuVC7vLSzDq1XbCcRQwV',
            name: 'Mleko odtłuszczone',
            description:
                'Mleko o zawartości tłuszczu, zredukowanej do 0,3 proc. Podobnie jak mleko półtłuste zawiera więcej wapnia od mleka pełnotłustego. Zalecane dla osób będących na tzw. diecie wątrobowej, czyli diecie łatwostrawnej z ograniczeniem tłuszczu, stosowanej przy chorobach takich narządów jak: wątroba, trzustka czy pęcherzyk żółciowy.',
        },
    ],
};

const ScanDetailsScreen = props => {
    const scanCreationDate = hps.getScanDate(mockedScan.created_at);
    return (
        <Container>
            <Grid>
                <Col>
                    <ImageContainer>
                        <Image
                            source={{ uri: mockedScan.scan_url }}
                            style={{
                                height: 150,
                                borderWidth: 2,
                                borderColor: globalGreen,
                                borderSpacing: 2,
                            }}
                        />
                    </ImageContainer>
                </Col>
                <Col>
                    <ScanInformationContainer>
                        <DateCreationLabel>Created at:</DateCreationLabel>
                        <Text>{scanCreationDate}</Text>
                    </ScanInformationContainer>
                </Col>
            </Grid>
        </Container>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScanDetailsScreen);
