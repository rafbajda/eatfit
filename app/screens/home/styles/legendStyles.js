import styled from 'styled-components';
import { Text } from 'native-base';
import { CenterRow } from '../../../shared/styles/common';
import { mediumGrey } from '../../../shared/constants/colors';
import { ListItem } from 'react-native-elements';

export const LegendRow = styled(CenterRow)`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const LegendHeader = styled(Text)`
    font-weight: bold;
    font-size: 30;
    color: ${mediumGrey};
    padding-bottom: 20;
`;
export const LegendDescription = styled(Text)`
    padding-left: 10;
    padding-right: 10;
    font-size: 15;
    padding-bottom: 15;
    color: ${mediumGrey};
`;

export const LegendIcon = styled(Text)`
    font-size: 30;
`;
export const LegendIconDescriptionHeader = styled(Text)`
    font-weight: bold;
    font-size: 20;
    color: ${mediumGrey};
`;

export const LegendListElement = styled(ListItem)`
    width: 100%;
`;
