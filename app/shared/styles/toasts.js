/* eslint-disable import/prefer-default-export */
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { globalGreen, globalWhite } from '../constants/Colors';

export const globalInfoToastStyle = {
    marginTop: getStatusBarHeight(),
    backgroundColor: globalGreen,
    borderBottomColor: globalWhite,
    borderBottomWidth: 1,
};
