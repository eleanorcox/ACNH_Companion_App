import React from 'react';
import {View} from 'react-native';
import FilterButtonsByType from 'utils/components/FilterButtonsByType';
import styles from 'styles/villagersStyles';

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

export default FilterButtons;
