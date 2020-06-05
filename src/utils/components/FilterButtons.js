import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import FilterButtonsByType from 'utils/components/FilterButtonsByType';

const FilterButtons = ({filterOptions, changeFilter, currentFilters}) => {
  const filterOptionsArray = Object.entries(filterOptions);

  return (
    <View>
      {filterOptionsArray.map(option => {
        const filterType = option[0];
        const options = option[1];
        return (
          <View style={styles.buttons}>
            <FilterButtonsByType
              filterType={filterType}
              filterOptions={options}
              changeFilter={changeFilter}
              currentFilters={currentFilters}
            />
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
});

export default FilterButtons;
