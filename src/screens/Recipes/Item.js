import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addLearnedRecipe,
  removeLearnedRecipe,
  addFavouriteRecipe,
  removeFavouriteRecipe,
} from '../../redux/recipesReducer';

import {itemInList} from 'utils/itemInList';
import styles from 'styles/recipesStyles';

const InfoRow = ({title, result}) => {
  return (
    <View style={styles.row}>
      <View style={styles.characteristic}>
        <Text style={styles.textWhite}>{title}</Text>
      </View>
      <View style={styles.characteristicAnswer}>
        <Text style={styles.textDarkGrey}>{result}</Text>
      </View>
    </View>
  );
};

export const Item = ({recipe}) => {
  const dispatch = useDispatch();
  const learned = useSelector(state => state.recipes.learnedRecipes);
  const favourites = useSelector(state => state.recipes.favouriteRecipes);

  let recipeSources = recipe.source.toString().replace(/,/g, ', ');
  const recipeHasSourceNotes = recipe.sourceNotes !== null;

  const recipeMaterials = recipe.materials;
  let recipeMaterialsArr = [];
  // eslint-disable-next-line no-unused-vars
  for (let [key, value] of Object.entries(recipeMaterials)) {
    recipeMaterialsArr.push(`${key} x${value}`);
  }
  let recipeMaterialsStr = recipeMaterialsArr.toString().replace(/,/g, ', ');

  return (
    <View style={styles.recipe}>
      <Text style={styles.name}>{recipe.name}</Text>
      <InfoRow title="Sources" result={recipeSources} />
      {recipeHasSourceNotes && (
        <InfoRow title="Notes" result={recipe.sourceNotes} />
      )}
      <InfoRow title="Category" result={recipe.category} />
      <InfoRow title="Materials" result={recipeMaterialsStr} />

      <View style={styles.row}>
        <View style={styles.icon}>
          <View style={styles.iconRow}>
            <Text style={styles.textDarkGrey}>Favourite </Text>
            <Icon
              name={itemInList(recipe, favourites) ? 'star' : 'star-border'}
              size={30}
              onPress={() => {
                itemInList(recipe, favourites)
                  ? dispatch(removeFavouriteRecipe(recipe))
                  : dispatch(addFavouriteRecipe(recipe));
              }}
            />
          </View>
        </View>
        <View style={styles.icon}>
          <View style={styles.iconRow}>
            <Text style={styles.textDarkGrey}>Learned </Text>
            <Icon
              name={
                itemInList(recipe, learned) ? 'bookmark' : 'bookmark-border'
              }
              size={30}
              onPress={() => {
                itemInList(recipe, learned)
                  ? dispatch(removeLearnedRecipe(recipe))
                  : dispatch(addLearnedRecipe(recipe));
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
