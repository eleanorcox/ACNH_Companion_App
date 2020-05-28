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

// Reducer
const villagersReducer = (state = INITIAL_STATE, action) => {
  const villager = action.payload;
  const newResidents = [...state.residents];
  const newFavouriteVillagers = [...state.favouriteVillagers];
  let villagerIndex;

  switch (action.type) {
    case ADD_RESIDENT:
      newResidents.push(villager);
      return {
        ...state,
        residents: newResidents,
      };
    case REMOVE_RESIDENT:
      villagerIndex = newResidents.indexOf(villager);
      newResidents.splice(villagerIndex, 1);
      return {
        ...state,
        residents: newResidents,
      };
    case ADD_FAVOURITE_VILLAGER:
      newFavouriteVillagers.push(villager);
      return {
        ...state,
        favouriteVillagers: newFavouriteVillagers,
      };
    case REMOVE_FAVOURITE_VILLAGER:
      villagerIndex = newFavouriteVillagers.indexOf(villager);
      newFavouriteVillagers.splice(villagerIndex, 1);
      return {
        ...state,
        favouriteVillagers: newFavouriteVillagers,
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

export const removeResident = villager => ({
  type: REMOVE_RESIDENT,
  payload: villager,
});

export const addFavouriteVillager = villager => ({
  type: ADD_FAVOURITE_VILLAGER,
  payload: villager,
});

export const removeFavouriteVillager = villager => ({
  type: REMOVE_FAVOURITE_VILLAGER,
  payload: villager,
});

export default villagersReducer;
