import styled from 'styled-components';
import { Text, Item } from 'native-base';
import { deepGrey } from '../../../shared/constants/colors';

export const CheckboxInformationText = styled(Text)`
    color: ${deepGrey};
    font-size: 13;
    font-weight: 400;
    padding-left: 15;
`;

export const CheckboxItem = styled(Item)`
    border-color: transparent;
    padding-top: 5;
`;

export default {
    CheckboxInformationText,
    CheckboxItem
};
