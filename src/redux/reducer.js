// This follows the ducks-modular-redux pattern to reduce number of files

const INITIAL_STATE = {
  residents: [],
  favouriteVillagers: [],
};

// Action Types
const ADD_RESIDENT = 'ADD_RESIDENT';
const REMOVE_RESIDENT = 'REMOVE_RESIDENT';
const ADD_FAVOURITE_VILLAGER = 'ADD_FAVOURITE_VILLAGER';
const REMOVE_FAVOURITE_VILLAGER = 'REMOVE_FAVOURITE_VILLAGER';

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

export default reducer;
