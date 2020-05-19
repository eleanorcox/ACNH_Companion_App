// This follows the ducks-modular-redux pattern to reduce number of files

const INITIAL_STATE = {
  residents: [],
};

// Action Types
const ADD_RESIDENT = 'ADD_RESIDENT';
const REMOVE_RESIDENT = 'REMOVE_RESIDENT';

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

export default reducer;
