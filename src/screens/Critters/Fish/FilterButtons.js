import React from 'react';
import {View} from 'react-native';
import FilterButtonsByType from 'utils/components/FilterButtonsByType';
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
  return (
    <View>
      <View style={styles.buttons}>
        <FilterButtonsByType
          filterType={'month'}
          allFilters={monthFilters}
          changeFilter={changeFilter}
          currentFilters={currentFilters}
        />
      </View>
      <View style={styles.buttons}>
        <FilterButtonsByType
          filterType={'time'}
          allFilters={timeFilters}
          changeFilter={changeFilter}
          currentFilters={currentFilters}
        />
      </View>
      <View style={styles.buttons}>
        <FilterButtonsByType
          filterType={'shadow'}
          allFilters={shadowFilters}
          changeFilter={changeFilter}
          currentFilters={currentFilters}
        />
      </View>
      <View style={styles.buttons}>
        <FilterButtonsByType
          filterType={'location'}
          allFilters={locationFilters}
          changeFilter={changeFilter}
          currentFilters={currentFilters}
        />
      </View>
      <View style={styles.buttons}>
        <FilterButtonsByType
          filterType={'other'}
          allFilters={otherFilters}
          changeFilter={changeFilter}
          currentFilters={currentFilters}
        />
      </View>
    </View>
  );
};
