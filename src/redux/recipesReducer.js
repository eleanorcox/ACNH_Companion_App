// This follows the ducks-modular-redux pattern to reduce number of files

const INITIAL_STATE = {
  learnedRecipes: [],
  favouriteRecipes: [],
};

// Action Types
const ADD_LEARNED_RECIPE = 'ADD_LEARNED_RECIPE';
const REMOVE_LEARNED_RECIPE = 'REMOVE_LEARNED_RECIPE';
const ADD_FAVOURITE_RECIPE = 'ADD_FAVOURITE_RECIPE';
const REMOVE_FAVOURITE_RECIPE = 'REMOVE_FAVOURITE_RECIPE';

// Reducer
const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LEARNED_RECIPE:
      const learnedRecipe = action.payload;
      const addToLearned = [...state.learnedRecipes];
      addToLearned.push(learnedRecipe);
      return {
        ...state,
        learnedRecipes: addToLearned,
      };
    case REMOVE_LEARNED_RECIPE:
      const recipeToRemove = action.payload;
      const removeFromLearned = [...state.learnedRecipes];
      const recipeToRemoveIndex = removeFromLearned.indexOf(recipeToRemove);
      removeFromLearned.splice(recipeToRemoveIndex, 1);
      return {
        ...state,
        learnedRecipes: removeFromLearned,
      };
    case ADD_FAVOURITE_RECIPE:
      const favouriteRecipe = action.payload;
      const addToFavourites = [...state.favouriteRecipes];
      addToFavourites.push(favouriteRecipe);
      return {
        ...state,
        favouriteRecipes: addToFavourites,
      };
    case REMOVE_FAVOURITE_RECIPE:
      const favouriteToRemove = action.payload;
      const removeFromFavourites = [...state.favouriteRecipes];
      const favouriteRecipeToRemoveIndex = removeFromFavourites.indexOf(
        favouriteToRemove,
      );
      removeFromFavourites.splice(favouriteRecipeToRemoveIndex, 1);
      return {
        ...state,
        favouriteRecipes: removeFromFavourites,
      };
    default:
      return state;
  }
};

// Action Creators
export const addLearnedRecipe = recipe => ({
  type: ADD_LEARNED_RECIPE,
  payload: recipe,
});

export const removeLearnedRecipe = recipe => ({
  type: REMOVE_LEARNED_RECIPE,
  payload: recipe,
});

export const addFavouriteRecipe = recipe => ({
  type: ADD_FAVOURITE_RECIPE,
  payload: recipe,
});

export const removeFavouriteRecipe = recipe => ({
  type: REMOVE_FAVOURITE_RECIPE,
  payload: recipe,
});

export default recipesReducer;
