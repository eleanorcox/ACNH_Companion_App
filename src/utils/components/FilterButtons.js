import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import FilterButtonsByType from 'utils/components/FilterButtonsByType';
import {FONT_SIZE_16, FONT_FAMILY, FONT_WEIGHT_BOLD} from 'assets/fonts';
import {WHITE} from 'assets/colours';

const FilterButtons = ({filterOptions, changeFilter, currentFilters}) => {
  const filterOptionsArray = Object.entries(filterOptions);

  return (
    <View>
      {filterOptionsArray.map(option => {
        const filterType = option[0];
        const filterTypeCapitalised =
          filterType[0].toUpperCase() + filterType.substring(1);
        const options = option[1];
        return (
          <View>
            <Text style={styles.text}>{filterTypeCapitalised}</Text>
            <View style={styles.buttons}>
              <FilterButtonsByType
                filterType={filterType}
                filterOptions={options}
                changeFilter={changeFilter}
                currentFilters={currentFilters}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },

  text: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_16,
    fontWeight: FONT_WEIGHT_BOLD,
    color: WHITE,
    textAlign: 'center',
  },
});

export default FilterButtons;
