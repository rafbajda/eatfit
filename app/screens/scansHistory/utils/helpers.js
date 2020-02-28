import { ListItem } from 'react-native-elements';
import React from 'react';
import moment from 'moment';
import { isArray } from 'lodash';
import { lightGrey } from '../../../shared/constants/colors';
import globalHps from '../../../shared/utils/helpers';
import screens from '../../../navigation/screens';
import NavigationService from '../../../navigation/NavigationService';

const getUserFriendlyDate = date =>
    moment(date).format('MMMM Do YYYY, h:mm:ss a');

const getScansList = (scans, action) =>
    isArray(scans)
        ? scans.map(scan => {
              const source = { uri: scan.scan_url };
              const scanDate = getUserFriendlyDate(
                  globalHps
                      .getDateFromFirebaseTimestamp(scan.created_at)
                      .toString()
              );
              return (
                  <ListItem
                      containerStyle={{
                          borderWidth: 1,
                          borderColor: lightGrey
                      }}
                      onPress={() => {
                          action(scan);
                          NavigationService.navigate(screens.ScanDetails);
                      }}
                      key={scan.id}
                      leftAvatar={{ source }}
                      title={scanDate}
                      chevron
                  />
              );
          })
        : [];

export default {
    getScansList
};
