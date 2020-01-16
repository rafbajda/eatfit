import { getStatusBarHeight } from 'react-native-status-bar-height';
import { globalGreen, globalWhite } from '../constants/colors';

const globalInfoToastStyle = {
    marginTop: getStatusBarHeight(),
    backgroundColor: globalGreen,
    borderBottomColor: globalWhite,
    borderBottomWidth: 1
};

export default {
    globalInfoToastStyle
};
