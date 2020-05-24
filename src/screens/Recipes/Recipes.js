import React, {useState, useEffect} from 'react';
import {View, Button, FlatList, Modal} from 'react-native';

import {useSelector} from 'react-redux';

const allRecipes = require('@nooksbazaar/acdb/recipes.json');
for (let i = 0; i < allRecipes.length; i++) {
  let name = allRecipes[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  allRecipes[i].name = name;
}

import styles from 'styles/recipesStyles';

import {filterData} from './filterData';
import {sortData} from './sortData';
import {ListControls} from './ListControls';
import {Item} from './Item';
import {NoResults} from './NoResults';

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
  const learned = useSelector(state => state.learnedRecipes);
  const favourites = useSelector(state => state.favouriteRecipes);

  const updateControls = newListControls => {
    setListControls(newListControls);
  };

  useEffect(() => {
    console.log(favourites);
    console.log(learned);
    let filteredRecipes;

    if (listControls.searchQuery !== '') {
      const query = listControls.searchQuery.toUpperCase();

      const searchResults = allRecipes.filter(recipe => {
        const recipeData = recipe.name.toUpperCase();
        return recipeData.includes(query);
      });

      filteredRecipes = filterData(
        searchResults,
        listControls.filters,
        favourites,
        learned,
      );
    } else {
      filteredRecipes = filterData(
        allRecipes,
        listControls.filters,
        favourites,
        learned,
      );
    }

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
        />
        <Button
          title={'Close Controls'}
          onPress={() => {
            toggleModal(false);
          }}
        />
      </Modal>
      <Button
        title={'Open Controls'}
        onPress={() => {
          toggleModal(true);
        }}
      />
      <FlatList
        data={recipesToDisplay}
        renderItem={({item}) => <Item recipe={item} />}
        keyExtractor={item => item.name}
        ListEmptyComponent={NoResults(listControls.filters.length)}
      />
    </View>
  );
};

export default Recipes;
