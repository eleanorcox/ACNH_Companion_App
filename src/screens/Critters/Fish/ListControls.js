import React, {useState} from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';

import styles from 'styles/VillagersStyles';

import {FilterButtons} from './FilterButtons';
import {updateFilters} from 'utils/updateFilters';
import {SortButtons} from './SortButtons';
import {updateSortAsc} from 'utils/updateSortAsc';

export const ListControls = ({listControls, updateControls}) => {
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
      <FilterButtons
        changeFilter={handleChangeFilter}
        currentFilters={listControls.filters}
      />
      <SortButtons
        changeSort={handleChangeSort}
        currentSortBy={listControls.sortBy}
        currentSortAsc={listControls.sortAsc}
      />
      <SearchBar
        placeholder="Search for fish..."
        lightTheme
        round
        style={styles.search}
        containerStyle={styles.searchContainer}
        onChangeText={text => searchFilterFunction(text)}
        autoCorrect={false}
        value={query}
      />
    </View>
  );
};
