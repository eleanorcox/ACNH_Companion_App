import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
// import {
//   addLearnedRecipe,
//   removeLearnedRecipe,
//   addFavouriteRecipe,
//   removeFavouriteRecipe,
// } from '../../redux/recipesReducer';

import styles from 'styles/recipesStyles';
import {getActiveMonthsStr} from 'utils/getActiveMonthsStr';
import {getActiveHoursStr} from 'utils/getActiveHoursStr';

export const Item = ({bug}) => {
  const hemisphere = 'northern'; // TODO: get this from state
  const activeMonths = bug.activeMonths[hemisphere];
  const activeMonthsStr = getActiveMonthsStr(activeMonths);
  const activeHoursStr = getActiveHoursStr(activeMonths);
  //   const dispatch = useDispatch();
  //   const learned = useSelector(state => state.recipes.learnedRecipes);
  //   const favourites = useSelector(state => state.recipes.favouriteRecipes);

  return (
    <View style={styles.recipe}>
      <Text>Name: {bug.name}</Text>
      <Image source={{uri: bug.iconImage}} style={styles.image} />
      <Text>Sell: {bug.sell}</Text>
      <Text>Location: {bug.whereHow}</Text>
      <Text>Weather: {bug.weather}</Text>
      <Text>Critterpedia Number: {bug.num}</Text>
      <Text>
        Colours: {bug.colors[0]}, {bug.colors[1]}
      </Text>
      <Text>Active Months: {activeMonthsStr}</Text>
      <Text>Active Hours: {activeHoursStr}</Text>
      {/*
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
      </View> */}
    </View>
  );
};
