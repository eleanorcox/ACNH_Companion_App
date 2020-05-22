import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
  const currentGenderFilters = [];
  const currentSpeciesFilters = [];
  const currentPersonalityFilters = [];
  const currentOtherFilters = [];

  for (let i = 0; i < currentFilters.length; i++) {
    const filterType = currentFilters[i][0];
    if (filterType === 'gender') {
      currentGenderFilters.push(currentFilters[i][1]);
    } else if (filterType === 'species') {
      currentSpeciesFilters.push(currentFilters[i][1]);
    } else if (filterType === 'personality') {
      currentPersonalityFilters.push(currentFilters[i][1]);
    } else if (filterType === 'other') {
      currentOtherFilters.push(currentFilters[i][1]);
    }
  }

  let genderButtons = genderFilters.map(filter => {
    const pressed = currentGenderFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['gender', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let speciesButtons = speciesFilters.map(filter => {
    const pressed = currentSpeciesFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['species', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let personalityButtons = personalityFilters.map(filter => {
    const pressed = currentPersonalityFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['personality', filter]);
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
      <View style={styles.buttons}>{genderButtons}</View>
      <View style={styles.buttons}>{speciesButtons}</View>
      <View style={styles.buttons}>{personalityButtons}</View>
      <View style={styles.buttons}>{otherButtons}</View>
    </View>
  );
};
