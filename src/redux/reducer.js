// This follows the ducks-modular-redux pattern to reduce number of files

const INITIAL_STATE = {
  residents: [],
  favouriteVillagers: [],
  learnedRecipes: [],
  favouriteRecipes: [],
};

// Action Types
const ADD_RESIDENT = 'ADD_RESIDENT';
const REMOVE_RESIDENT = 'REMOVE_RESIDENT';
const ADD_FAVOURITE_VILLAGER = 'ADD_FAVOURITE_VILLAGER';
const REMOVE_FAVOURITE_VILLAGER = 'REMOVE_FAVOURITE_VILLAGER';
const ADD_LEARNED_RECIPE = 'ADD_LEARNED_RECIPE';
const REMOVE_LEARNED_RECIPE = 'REMOVE_LEARNED_RECIPE';
const ADD_FAVOURITE_RECIPE = 'ADD_FAVOURITE_RECIPE';
const REMOVE_FAVOURITE_RECIPE = 'REMOVE_FAVOURITE_RECIPE';

// Reducers
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_RESIDENT:
      const villager = action.payload;
      const addedResident = [...state.residents];
      addedResident.push(villager);
      return {
        ...state,
        residents: addedResident,
      };
    case REMOVE_RESIDENT:
      const resident = action.payload;
      const removedResident = [...state.residents];
      const villagerIndex = removedResident.indexOf(resident);
      removedResident.splice(villagerIndex, 1);
      return {
        ...state,
        residents: removedResident,
      };
    case ADD_FAVOURITE_VILLAGER:
      const favouriteVillager = action.payload;
      const addToFavourites = [...state.favouriteVillagers];
      addToFavourites.push(favouriteVillager);
      return {
        ...state,
        favouriteVillagers: addToFavourites,
      };
    case REMOVE_FAVOURITE_VILLAGER:
      const villagerToRemove = action.payload;
      const removeFromFavourites = [...state.favouriteVillagers];
      const villagerToRemoveIndex = removeFromFavourites.indexOf(
        villagerToRemove,
      );
      removeFromFavourites.splice(villagerToRemoveIndex, 1);
      return {
        ...state,
        favouriteVillagers: removeFromFavourites,
      };
    case ADD_LEARNED_RECIPE:
      console.log('addlearn');
      const learnedRecipe = action.payload;
      const addToLearned = [...state.learnedRecipes];
      addToLearned.push(learnedRecipe);
      return {
        ...state,
        learnedRecipes: addToLearned,
      };
    case REMOVE_LEARNED_RECIPE:
      console.log('rmvlearn');
      const recipeToRemove = action.payload;
      const removeFromLearned = [...state.learnedRecipes];
      const recipeToRemoveIndex = removeFromLearned.indexOf(recipeToRemove);
      removeFromLearned.splice(recipeToRemoveIndex, 1);
      return {
        ...state,
        learnedRecipes: removeFromLearned,
      };
    case ADD_FAVOURITE_RECIPE:
      console.log('addfav');
      const favouriteRecipe = action.payload;
      const addToFavouriteRecipes = [...state.favouriteRecipes];
      addToFavouriteRecipes.push(favouriteRecipe);
      return {
        ...state,
        favouriteRecipes: addToFavouriteRecipes,
      };
    case REMOVE_FAVOURITE_RECIPE:
      console.log('rmvfav');
      const favouriteToRemove = action.payload;
      const removeFromFavouriteRecipes = [...state.favouriteRecipes];
      const favouriteRecipeToRemoveIndex = removeFromFavouriteRecipes.indexOf(
        favouriteToRemove,
      );
      removeFromFavouriteRecipes.splice(favouriteRecipeToRemoveIndex, 1);
      return {
        ...state,
        favouriteRecipes: removeFromFavouriteRecipes,
      };
    default:
      return state;
  }
};

// Action Creators
export const addResident = villager => ({
  type: ADD_RESIDENT,
  payload: villager,
});

export const removeResident = resident => ({
  type: REMOVE_RESIDENT,
  payload: resident,
});

export const addFavouriteVillager = villager => ({
  type: ADD_FAVOURITE_VILLAGER,
  payload: villager,
});

export const removeFavouriteVillager = villager => ({
  type: REMOVE_FAVOURITE_VILLAGER,
  payload: villager,
});

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

export default reducer;
