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

import styles from 'styles/recipesStyles';
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
    <View style={styles.recipe}>
      <Text>Name: {fish.name}</Text>
      <Image source={{uri: fish.iconImage}} style={styles.image} />
      <Text>Sell: {fish.sell}</Text>
      <Text>Location: {fish.whereHow}</Text>
      <Text>Shadow: {fish.shadow}</Text>
      <Text>Critterpedia Number: {fish.num}</Text>
      <Text>
        Colours: {fish.colors[0]}, {fish.colors[1]}
      </Text>
      <Text>Active Months: {activeMonthsStr}</Text>
      <Text>Active Hours: {activeHoursStr}</Text>

      <View style={styles.buttons}>
        <Icon
          name={caught.includes(fish) ? 'star' : 'star-border'}
          size={30}
          onPress={() => {
            caught.includes(fish)
              ? dispatch(removeCaughtFish(fish))
              : dispatch(addCaughtFish(fish));
          }}
        />
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
  );
};
