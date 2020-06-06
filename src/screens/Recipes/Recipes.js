import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, FlatList, Modal} from 'react-native';

import {useSelector} from 'react-redux';

const allRecipes = require('@nooksbazaar/acdb/recipes.json');
for (let i = 0; i < allRecipes.length; i++) {
  let name = allRecipes[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  allRecipes[i].name = name;
}

import styles from 'styles/recipesStyles';

import ListControls from 'utils/components/ListControls';
import {filterOptions, sortOptions} from './filterSortOptions';
import {filterData} from './filterData';
import {sortData} from './sortData';
import {Item} from './Item';
import NoResults from 'utils/components/NoResults';

const Recipes = () => {
  // listControls is an object with the following key-value pairs:
  // > filters: an array of filter arrays, e.g. [['sources', 'Balloons'], ['materials', 'clay']]
  // > sortBy: a string indicating the sorting option e.g. 'Name' or 'Category'
  // > sortAsc: a number indicating whether to sort in ascending or descending order, where ascending = 1 and descending = -1
  // > searchQuery: a string representing the text typed into the search bar
  const [listControls, setListControls] = useState({
    filters: [],
    sortBy: 'Name',
    sortAsc: 1,
    searchQuery: '',
  });
  const [recipesToDisplay, setRecipesToDisplay] = useState(allRecipes);

  const [modalVisible, setModalVisible] = useState(false);
  const learned = useSelector(state => state.recipes.learnedRecipes);
  const favourites = useSelector(state => state.recipes.favouriteRecipes);

  const updateControls = newListControls => {
    setListControls(newListControls);
  };

  useEffect(() => {
    const filteredRecipes = filterData(
      allRecipes,
      listControls.filters,
      listControls.searchQuery,
      favourites,
      learned,
    );

    const sortedRecipes = sortData(
      filteredRecipes,
      listControls.sortBy,
      listControls.sortAsc,
      favourites,
      learned,
    );

    setRecipesToDisplay(sortedRecipes);
  }, [listControls, favourites, learned]);

  const toggleModal = visible => {
    setModalVisible(visible);
  };

  return (
    <View style={styles.view}>
      <Modal animationType={'slide'} transparent={false} visible={modalVisible}>
        <ListControls
          listControls={listControls}
          updateControls={updateControls}
          filterOptions={filterOptions}
          sortOptions={sortOptions}
        />
        <TouchableOpacity
          onPress={() => {
            toggleModal(false);
          }}
          style={styles.controlButton}>
          <Text>Close Controls</Text>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          toggleModal(true);
        }}
        style={styles.controlButton}>
        <Text>Open Controls</Text>
      </TouchableOpacity>
      <FlatList
        data={recipesToDisplay}
        renderItem={({item}) => <Item recipe={item} />}
        keyExtractor={item => item.name}
        ListEmptyComponent={
          <NoResults
            numFilters={listControls.filters.length}
            type={'recipes'}
          />
        }
      />
    </View>
  );
};

export default Recipes;
