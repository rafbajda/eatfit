import styled from 'styled-components';
import { Button } from 'native-base';
import { globalGreen } from '../../../shared/constants/colors';

export const OtherActionButton = styled(Button)`
    background-color: ${globalGreen};
    font-weight: bold;
    height: 50;
    width: 280;
    justify-content: center;
`;

const OtherActionRowStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 'auto',
    paddingBottom: 12,
    paddingTop: 12
};

const OtherActionTextStyle = { fontSize: 16, textAlign: 'center' };

const mailIconStyle = { color: globalGreen, fontSize: 200, marginTop: 70 };

export default {
    OtherActionTextStyle,
    mailIconStyle,
    OtherActionRowStyle
};
