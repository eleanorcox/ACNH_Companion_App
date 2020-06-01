import React from 'react';
import {View} from 'react-native';
import FilterButtonsByType from 'utils/components/FilterButtonsByType';
import styles from 'styles/VillagersStyles';

const genderFilters = ['Female', 'Male'];
const speciesFilters = [
  'Alligator',
  'Bear',
  'Bird',
  'Bull',
  'Cat',
  'Chicken',
  'Cow',
  'Cub',
  'Deer',
  'Dog',
  'Duck',
  'Eagle',
  'Elephant',
  'Frog',
  'Goat',
  'Gorilla',
  'Hamster',
  'Hippo',
  'Horse',
  'Kangaroo',
  'Koala',
  'Lion',
  'Monkey',
  'Mouse',
  'Octopus',
  'Ostrich',
  'Penguin',
  'Pig',
  'Rabbit',
  'Rhino',
  'Sheep',
  'Squirrel',
  'Tiger',
  'Wolf',
];
const personalityFilters = [
  'Big Sister',
  'Cranky',
  'Jock',
  'Lazy',
  'Normal',
  'Peppy',
  'Smug',
  'Snooty',
];
const otherFilters = ['Favourites', 'Residents'];

export const FilterButtons = ({changeFilter, currentFilters}) => {
  return (
    <View>
      <View style={styles.buttons}>
        <FilterButtonsByType
          filterType={'gender'}
          allFilters={genderFilters}
          changeFilter={changeFilter}
          currentFilters={currentFilters}
        />
      </View>
      <View style={styles.buttons}>
        <FilterButtonsByType
          filterType={'species'}
          allFilters={speciesFilters}
          changeFilter={changeFilter}
          currentFilters={currentFilters}
        />
      </View>
      <View style={styles.buttons}>
        <FilterButtonsByType
          filterType={'personality'}
          allFilters={personalityFilters}
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
