import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {BEIGE_LIGHT, GRAY_DARKER} from 'assets/colours';
import {FONT_FAMILY, FONT_SIZE_16, FONT_WEIGHT_BOLD} from 'assets/fonts';

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
        <Text style={pressed ? styles.textPressed : styles.textUnpressed}>
          {filter}
        </Text>
      </TouchableOpacity>
    );
  });
  return buttons;
};

const styles = StyleSheet.create({
  buttonUnpressed: {
    backgroundColor: BEIGE_LIGHT,
    padding: 5,
    borderRadius: 10,
    marginVertical: 3,
    width: 120,
    justifyContent: 'center',
  },

  buttonPressed: {
    backgroundColor: GRAY_DARKER,
    padding: 5,
    borderRadius: 10,
    marginVertical: 3,
    width: 120,
    justifyContent: 'center',
  },

  textPressed: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_16,
    fontWeight: FONT_WEIGHT_BOLD,
    color: BEIGE_LIGHT,
    textAlign: 'center',
  },

  textUnpressed: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_16,
    fontWeight: FONT_WEIGHT_BOLD,
    color: GRAY_DARKER,
    textAlign: 'center',
  },
});

export default FilterButtonsByType;
