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
          <View style={styles.row}>
            <View style={styles.characteristic}>
              <Text>Sell</Text>
            </View>
            <View style={styles.characteristicAnswer}>
              <Text>{fish.sell}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.characteristic}>
              <Text>Location</Text>
            </View>
            <View style={styles.characteristicAnswer}>
              <Text>{fish.whereHow}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.characteristic}>
              <Text>Shadow</Text>
            </View>
            <View style={styles.characteristicAnswer}>
              <Text>{fish.shadow}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.characteristic}>
              <Text>Active Months</Text>
            </View>
            <View style={styles.characteristicAnswer}>
              <Text>{activeMonthsStr}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.characteristic}>
              <Text>Active Hours</Text>
            </View>
            <View style={styles.characteristicAnswer}>
              <Text>{activeHoursStr}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.icon}>
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
        <View style={styles.icon}>
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
  );
};
