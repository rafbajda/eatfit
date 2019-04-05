/* eslint-disable import/prefer-default-export */
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { globalGreen, globalWhite } from '../constants/colors';

export const globalInfoToastStyle = {
    marginTop: getStatusBarHeight(),
    backgroundColor: globalGreen,
    borderBottomColor: globalWhite,
    borderBottomWidth: 1,
};
