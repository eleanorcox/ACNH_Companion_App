import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const FilterButtonsByType = ({
  filterType,
  filterOptions,
  changeFilter,
  currentFilters,
}) => {
  const buttons = filterOptions.map(filter => {
    let pressed = false;
    for (let i = 0; i < currentFilters.length; i++) {
      if (
        currentFilters[i][0] === filterType &&
        currentFilters[i][1] === filter
      ) {
        pressed = true;
      }
    }
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter([filterType, filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });
  return buttons;
};

const styles = StyleSheet.create({
  buttonUnpressed: {
    // alignSelf: 'center',
    borderColor: '#000066',
    backgroundColor: 'blue',
  },

  buttonPressed: {
    // alignSelf: 'center',
    borderColor: '#000066',
    backgroundColor: 'pink',
  },
});

export default FilterButtonsByType;
