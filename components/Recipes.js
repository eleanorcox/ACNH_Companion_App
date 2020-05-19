import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

const recipesJson = require('@nooksbazaar/acdb/recipes.json');
import styles from '../stylesheets/AppStyles';

const Item = ({recipe}) => {
  const recipeSources = recipe.source;
  let recipeSourcesStr = recipeSources.toString().replace(/,/g, ', ');

  const recipeMaterials = recipe.materials;
  let recipeMaterialsArr = [];
  for (let [key, value] of Object.entries(recipeMaterials)) {
    recipeMaterialsArr.push(`${key}: ${value}`);
  }
  const recipeMaterialsStr = recipeMaterialsArr.toString().replace(/,/g, ', ');

  return (
    <View>
      <Text>Name: {recipe.name}</Text>
      <Text>Sources: {recipeSourcesStr}</Text>
      <Text>Source Notes: {recipe.sourceNotes}</Text>
      <Text>Category: {recipe.category}</Text>
      <Text>Materials: {recipeMaterialsStr}</Text>
    </View>
  );
};

const Recipes = ({navigation}) => {
  return (
    <SafeAreaView style={styles.view}>
      <Text>Recipes</Text>
      <FlatList
        data={recipesJson}
        renderItem={({item}) => <Item recipe={item} />}
        keyExtractor={item => item.uniqueEntryId}
      />
    </SafeAreaView>
  );
};

export default Recipes;
