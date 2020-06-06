import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addCaughtFish,
  removeCaughtFish,
  addDonatedFish,
  removeDonatedFish,
} from '../../../redux/fishReducer';

import styles from 'styles/crittersStyles';
import {getActiveMonthsStr} from 'utils/getActiveMonthsStr';
import {getActiveHoursStr} from 'utils/getActiveHoursStr';

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

export const Item = ({fish}) => {
  const hemisphere = useSelector(state => state.profile.hemisphere);
  const activeMonths = fish.activeMonths[hemisphere];
  const activeMonthsStr = getActiveMonthsStr(activeMonths);
  const activeHoursStr = getActiveHoursStr(activeMonths);
  const dispatch = useDispatch();
  const caught = useSelector(state => state.fish.caughtFish);
  const donated = useSelector(state => state.fish.donatedFish);

  return (
    <View style={styles.critter}>
      <Text style={styles.name}>{fish.name}</Text>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <Image source={{uri: fish.iconImage}} style={styles.image} />
        </View>
        <View style={styles.rightContainer}>
          <InfoRow title="Sell" result={fish.sell} />
          <InfoRow title="Location" result={fish.whereHow} />
          <InfoRow title="Shadow" result={fish.shadow} />
          <InfoRow title="Active Months" result={activeMonthsStr} />
          <InfoRow title="Active Hours" result={activeHoursStr} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.icon}>
          <View style={styles.iconRow}>
            <Text style={styles.textDarkGrey}>Caught </Text>
            <Icon
              name={caught.includes(fish) ? 'star' : 'star-border'}
              size={30}
              onPress={() => {
                caught.includes(fish)
                  ? dispatch(removeCaughtFish(fish))
                  : dispatch(addCaughtFish(fish));
              }}
            />
          </View>
        </View>
        <View style={styles.icon}>
          <View style={styles.iconRow}>
            <Text style={styles.textDarkGrey}>Donated </Text>
            <Icon
              name={donated.includes(fish) ? 'bookmark' : 'bookmark-border'}
              size={30}
              onPress={() => {
                donated.includes(fish)
                  ? dispatch(removeDonatedFish(fish))
                  : dispatch(addDonatedFish(fish));
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
