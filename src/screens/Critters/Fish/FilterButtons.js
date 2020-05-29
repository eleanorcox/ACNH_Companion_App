import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from 'styles/VillagersStyles';

const monthFilters = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const shadowFilters = [
  'X-Small',
  'Small',
  'Medium',
  'Medium w/Fin',
  'Large',
  'Large w/Fin',
  'X-Large',
  'XX-Large',
  'Long',
];
const locationFilters = [
  'Pier',
  'Pond',
  'River',
  'River (clifftop)',
  'River (mouth)',
  'Sea',
  'Sea (rainy days)',
];

const timeFilters = ['Catch Now!', 'New This Month', 'Last Chance'];
const otherFilters = ['Caught', 'Donated'];

export const FilterButtons = ({changeFilter, currentFilters}) => {
  const currentMonthFilters = [];
  const currentTimeFilters = [];
  const currentShadowFilters = [];
  const currentLocationFilters = [];
  const currentOtherFilters = [];

  for (let i = 0; i < currentFilters.length; i++) {
    const filterType = currentFilters[i][0];
    if (filterType === 'month') {
      currentMonthFilters.push(currentFilters[i][1]);
    } else if (filterType === 'time') {
      currentTimeFilters.push(currentFilters[i][1]);
    } else if (filterType === 'shadow') {
      currentShadowFilters.push(currentFilters[i][1]);
    } else if (filterType === 'location') {
      currentLocationFilters.push(currentFilters[i][1]);
    } else if (filterType === 'other') {
      currentOtherFilters.push(currentFilters[i][1]);
    }
  }

  let monthButtons = monthFilters.map(filter => {
    const pressed = currentMonthFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['month', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let timeButtons = timeFilters.map(filter => {
    const pressed = currentTimeFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['time', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let shadowButtons = shadowFilters.map(filter => {
    const pressed = currentShadowFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['shadow', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let locationButtons = locationFilters.map(filter => {
    const pressed = currentLocationFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['location', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let otherButtons = otherFilters.map(filter => {
    const pressed = currentOtherFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['other', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <View style={styles.buttons}>{monthButtons}</View>
      <View style={styles.buttons}>{timeButtons}</View>
      <View style={styles.buttons}>{shadowButtons}</View>
      <View style={styles.buttons}>{locationButtons}</View>
      <View style={styles.buttons}>{otherButtons}</View>
    </View>
  );
};
