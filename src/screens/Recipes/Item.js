import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addLearnedRecipe,
  removeLearnedRecipe,
  addFavouriteRecipe,
  removeFavouriteRecipe,
} from '../../redux/reducer';

import styles from 'styles/recipesStyles';

export const Item = ({recipe}) => {
  const dispatch = useDispatch();
  const learned = useSelector(state => state.learnedRecipes);
  const favourites = useSelector(state => state.favouriteRecipes);

  let recipeSources = recipe.source.toString().replace(/,/g, ', ');
  const recipeHasSourceNotes = recipe.sourceNotes !== null;

  const recipeMaterials = recipe.materials;
  let recipeMaterialsArr = [];
  // eslint-disable-next-line no-unused-vars
  for (let [key, value] of Object.entries(recipeMaterials)) {
    recipeMaterialsArr.push(`${key}: ${value}`);
  }
  const recipeMaterialsStr = recipeMaterialsArr.toString().replace(/,/g, ', ');

  return (
    <View style={styles.recipe}>
      <Text>Name: {recipe.name}</Text>
      <Text>Sources: {recipeSources}</Text>
      {recipeHasSourceNotes && <Text>Notes: {recipe.sourceNotes}</Text>}
      <Text>Category: {recipe.category}</Text>
      <Text>Materials: {recipeMaterialsStr}</Text>

      <View style={styles.buttons}>
        <Icon
          name={favourites.includes(recipe) ? 'star' : 'star-border'}
          size={30}
          onPress={() => {
            favourites.includes(recipe)
              ? dispatch(removeFavouriteRecipe(recipe))
              : dispatch(addFavouriteRecipe(recipe));
          }}
        />
        <Icon
          name={learned.includes(recipe) ? 'bookmark' : 'bookmark-border'}
          size={30}
          onPress={() => {
            learned.includes(recipe)
              ? dispatch(removeLearnedRecipe(recipe))
              : dispatch(addLearnedRecipe(recipe));
          }}
        />
      </View>
    </View>
  );
};
