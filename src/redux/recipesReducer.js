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
  const recipe = action.payload;
  const newLearnedRecipes = [...state.learnedRecipes];
  const newFavouriteRecipes = [...state.favouriteRecipes];
  let recipeIndex;

  switch (action.type) {
    case ADD_LEARNED_RECIPE:
      newLearnedRecipes.push(recipe);
      return {
        ...state,
        learnedRecipes: newLearnedRecipes,
      };
    case REMOVE_LEARNED_RECIPE:
      recipeIndex = newLearnedRecipes.indexOf(recipe);
      newLearnedRecipes.splice(recipeIndex, 1);
      return {
        ...state,
        learnedRecipes: newLearnedRecipes,
      };
    case ADD_FAVOURITE_RECIPE:
      newFavouriteRecipes.push(recipe);
      return {
        ...state,
        favouriteRecipes: newFavouriteRecipes,
      };
    case REMOVE_FAVOURITE_RECIPE:
      recipeIndex = newFavouriteRecipes.indexOf(recipe);
      newFavouriteRecipes.splice(recipeIndex, 1);
      return {
        ...state,
        favouriteRecipes: newFavouriteRecipes,
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
