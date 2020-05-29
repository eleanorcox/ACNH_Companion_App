const INITIAL_STATE = {
  caughtFish: [],
  donatedFish: [],
};

// Action Types
const ADD_CAUGHT_FISH = 'ADD_CAUGHT_FISH';
const REMOVE_CAUGHT_FISH = 'REMOVE_CAUGHT_FISH';
const ADD_DONATED_FISH = 'ADD_DONATED_FISH';
const REMOVE_DONATED_FISH = 'REMOVE_DONATED_FISH';

// Reducer
const fishReducer = (state = INITIAL_STATE, action) => {
  const fish = action.payload;
  const newCaughtFish = [...state.caughtFish];
  const newDonatedFish = [...state.donatedFish];
  let fishIndex;

  switch (action.type) {
    case ADD_CAUGHT_FISH:
      newCaughtFish.push(fish);
      return {
        ...state,
        caughtFish: newCaughtFish,
      };
    case REMOVE_CAUGHT_FISH:
      fishIndex = newCaughtFish.indexOf(fish);
      newCaughtFish.splice(fishIndex, 1);
      return {
        ...state,
        caughtFish: newCaughtFish,
      };
    case ADD_DONATED_FISH:
      newDonatedFish.push(fish);
      return {
        ...state,
        donatedFish: newDonatedFish,
      };
    case REMOVE_DONATED_FISH:
      fishIndex = newDonatedFish.indexOf(fish);
      newDonatedFish.splice(fishIndex, 1);
      return {
        ...state,
        donatedFish: newDonatedFish,
      };
    default:
      return state;
  }
};

// Action Creators
export const addCaughtFish = fish => ({
  type: ADD_CAUGHT_FISH,
  payload: fish,
});

export const removeCaughtFish = fish => ({
  type: REMOVE_CAUGHT_FISH,
  payload: fish,
});

export const addDonatedFish = fish => ({
  type: ADD_DONATED_FISH,
  payload: fish,
});

export const removeDonatedFish = fish => ({
  type: REMOVE_DONATED_FISH,
  payload: fish,
});

export default fishReducer;
