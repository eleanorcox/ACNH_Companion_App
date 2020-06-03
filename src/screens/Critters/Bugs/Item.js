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

import styles from 'styles/recipesStyles';
import {getActiveMonthsStr} from 'utils/getActiveMonthsStr';
import {getActiveHoursStr} from 'utils/getActiveHoursStr';

export const Item = ({bug}) => {
  const hemisphere = useSelector(state => state.profile.hemisphere);
  const activeMonths = bug.activeMonths[hemisphere];
  const activeMonthsStr = getActiveMonthsStr(activeMonths);
  const activeHoursStr = getActiveHoursStr(activeMonths);
  const dispatch = useDispatch();
  const caught = useSelector(state => state.bugs.caughtBugs);
  const donated = useSelector(state => state.bugs.donatedBugs);

  return (
    <View style={styles.recipe}>
      <Text>Name: {bug.name}</Text>
      <Image source={{uri: bug.iconImage}} style={styles.image} />
      <Text>Sell: {bug.sell}</Text>
      <Text>Location: {bug.whereHow}</Text>
      <Text>Weather: {bug.weather}</Text>
      <Text>Critterpedia Number: {bug.num}</Text>
      <Text>
        Colours: {bug.colors[0]}, {bug.colors[1]}
      </Text>
      <Text>Active Months: {activeMonthsStr}</Text>
      <Text>Active Hours: {activeHoursStr}</Text>

      <View style={styles.buttons}>
        <Icon
          name={caught.includes(bug) ? 'star' : 'star-border'}
          size={30}
          onPress={() => {
            caught.includes(bug)
              ? dispatch(removeCaughtBug(bug))
              : dispatch(addCaughtBug(bug));
          }}
        />
        <Icon
          name={donated.includes(bug) ? 'bookmark' : 'bookmark-border'}
          size={30}
          onPress={() => {
            donated.includes(bug)
              ? dispatch(removeDonatedBug(bug))
              : dispatch(addDonatedBug(bug));
          }}
        />
      </View>
    </View>
  );
};
