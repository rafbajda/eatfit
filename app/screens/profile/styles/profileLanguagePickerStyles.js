import styled from 'styled-components';
import { Col, Row } from 'native-base';
import { lightGrey } from '../../../shared/constants/colors';

const placeholderStyle = { color: lightGrey };

export const ProfileLanguageRow = styled(Row)`
    padding-right: 15;
`;

export const ProfilePickerColumn = styled(Col)`
    height: 50;
    width: 140;
    border-radius: 30;
    border-width: 1;
    padding-left: 15;
    border-color: ${lightGrey};
    overflow: hidden;
`;

export default {
    placeholderStyle
};
