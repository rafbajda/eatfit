/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import { Button, Text, Item } from 'native-base';
import { globalGreen, deepGrey } from '../../../shared/constants/Colors';
import { CenterFormContainer } from '../../../shared/styles/common';

export const CreateButton = styled(Button)`
    background-color: ${globalGreen};
    width: 70%;
    justify-content: center;
    margin-top: 10;
    font-weight: bold;
`;

export const SignUpContainer = styled(CenterFormContainer)`
    padding-top: 15;
`;

export const CheckboxInformationText = styled(Text)`
    color: ${deepGrey}
    font-size: 13;
    font-weight: 400;
    padding-left: 15;
`;

export const CheckboxItem = styled(Item)`
    border-color: transparent;
    padding-top: 5;
`;
