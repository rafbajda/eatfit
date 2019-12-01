import { Row, Col } from 'native-base';
import styled from 'styled-components';
import { lightGrey } from '../../../shared/constants/colors';

export const LanguageRow = styled(Row)`
    padding: 20px;
    padding-bottom: 0px;
`;

export const PickerColumn = styled(Col)`
    height: 50;
    width: 15;
    border-radius: 30;
    border-width: 1;
    padding-left: 15;
    border-color: ${lightGrey};
    overflow: hidden;
`;
