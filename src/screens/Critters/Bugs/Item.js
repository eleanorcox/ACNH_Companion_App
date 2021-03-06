import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addCaughtBug,
  removeCaughtBug,
  addDonatedBug,
  removeDonatedBug,
} from '../../../redux/bugsReducer';

import styles from 'styles/crittersStyles';
import {getActiveMonthsStr} from 'utils/getActiveMonthsStr';
import {getActiveHoursStr} from 'utils/getActiveHoursStr';
import {itemInList} from 'utils/itemInList';

const InfoRow = ({title, result}) => {
  return (
    <View style={styles.row}>
      <View style={styles.characteristic}>
        <Text style={styles.textWhite}>{title}</Text>
      </View>
      <View style={styles.characteristicAnswer}>
        <Text style={styles.textDarkGrey}>{result}</Text>
      </View>
    </View>
  );
};

export const Item = ({bug}) => {
  const hemisphere = useSelector(state => state.profile.hemisphere);
  const activeMonths = bug.activeMonths[hemisphere];
  const activeMonthsStr = getActiveMonthsStr(activeMonths);
  const activeHoursStr = getActiveHoursStr(activeMonths);
  const dispatch = useDispatch();
  const caught = useSelector(state => state.bugs.caughtBugs);
  const donated = useSelector(state => state.bugs.donatedBugs);

  return (
    <View style={styles.critter}>
      <Text style={styles.name}>{bug.name}</Text>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <Image source={{uri: bug.iconImage}} style={styles.image} />
        </View>
        <View style={styles.rightContainer}>
          <InfoRow title="Sell" result={bug.sell} />
          <InfoRow title="Location" result={bug.whereHow} />
          <InfoRow title="Weather" result={bug.weather} />
          <InfoRow title="Active Months" result={activeMonthsStr} />
          <InfoRow title="Active Hours" result={activeHoursStr} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.icon}>
          <View style={styles.iconRow}>
            <Text style={styles.textDarkGrey}>Caught </Text>
            <Icon
              name={itemInList(bug, caught) ? 'star' : 'star-border'}
              size={30}
              onPress={() => {
                itemInList(bug, caught)
                  ? dispatch(removeCaughtBug(bug))
                  : dispatch(addCaughtBug(bug));
              }}
            />
          </View>
        </View>
        <View style={styles.icon}>
          <View style={styles.iconRow}>
            <Text style={styles.textDarkGrey}>Donated </Text>
            <Icon
              name={itemInList(bug, donated) ? 'bookmark' : 'bookmark-border'}
              size={30}
              onPress={() => {
                itemInList(bug, donated)
                  ? dispatch(removeDonatedBug(bug))
                  : dispatch(addDonatedBug(bug));
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
