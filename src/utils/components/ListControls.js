import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SearchBar} from 'react-native-elements';

import {StyleSheet} from 'react-native';

import FilterButtons from './FilterButtons';
import {updateFilters} from 'utils/updateFilters';
import SortButtons from './SortButtons';
import {updateSortAsc} from 'utils/updateSortAsc';
import {BEIGE_LIGHT, WHITE} from 'assets/colours';
import {FONT_FAMILY, FONT_WEIGHT_BOLD, FONT_SIZE_20} from 'assets/fonts';

const ListControls = ({
  listControls,
  updateControls,
  filterOptions,
  sortOptions,
}) => {
  const [query, setQuery] = useState('');

  const handleChangeFilter = newFilter => {
    const updatedFilters = updateFilters(listControls.filters, newFilter);
    const newControls = {
      filters: updatedFilters,
      sortBy: listControls.sortBy,
      sortAsc: listControls.sortAsc,
      searchQuery: listControls.searchQuery,
    };
    updateControls(newControls);
  };

  const handleChangeSort = newSortBy => {
    const newSortAsc = updateSortAsc(
      listControls.sortBy,
      newSortBy,
      listControls.sortAsc,
    );
    const newControls = {
      filters: listControls.filters,
      sortBy: newSortBy,
      sortAsc: newSortAsc,
      searchQuery: listControls.searchQuery,
    };
    updateControls(newControls);
  };

  const searchFilterFunction = text => {
    setQuery(text);
    const newControls = {
      filters: listControls.filters,
      sortBy: listControls.sortBy,
      sortAsc: listControls.sortAsc,
      searchQuery: text,
    };
    updateControls(newControls);
  };

  return (
    <View style={styles.listControls}>
      <Text style={styles.text}>Filters</Text>
      <FilterButtons
        filterOptions={filterOptions}
        changeFilter={handleChangeFilter}
        currentFilters={listControls.filters}
      />
      <Text style={styles.text}>Sort By</Text>
      <SortButtons
        sortOptions={sortOptions}
        changeSort={handleChangeSort}
        currentSortBy={listControls.sortBy}
        currentSortAsc={listControls.sortAsc}
      />
      <SearchBar
        placeholder="Search..."
        lightTheme
        round
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInput}
        onChangeText={text => searchFilterFunction(text)}
        autoCorrect={false}
        value={query}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listControls: {
    width: '100%',
  },

  text: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_20,
    fontWeight: FONT_WEIGHT_BOLD,
    color: WHITE,
    textAlign: 'center',
    marginVertical: 8,
  },

  search: {
    width: '100%',
  },

  searchContainer: {
    width: '100%',
    backgroundColor: BEIGE_LIGHT,
    borderRadius: 20,
    marginVertical: 8,
  },

  searchInput: {
    backgroundColor: BEIGE_LIGHT,
  },
});

export default ListControls;
