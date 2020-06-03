const INITIAL_STATE = {
  donatedFossils: [],
  donatedArt: [],
};

// Action Types
const ADD_DONATED_FOSSIl = 'ADD_DONATED_FOSSIl';
const REMOVE_DONATED_FOSSIL = 'REMOVE_DONATED_FOSSIL';
const ADD_DONATED_ART = 'ADD_DONATED_ART';
const REMOVE_DONATED_ART = 'REMOVE_DONATED_ART';

// Reducer
const museumReducer = (state = INITIAL_STATE, action) => {
  const donation = action.payload;
  const newDonatedFossils = [...state.donatedFossils];
  const newDonatedArt = [...state.donatedArt];
  let donationIndex;

  switch (action.type) {
    case ADD_DONATED_FOSSIl:
      newDonatedFossils.push(donation);
      return {
        ...state,
        donatedFossils: newDonatedFossils,
      };
    case REMOVE_DONATED_FOSSIL:
      donationIndex = newDonatedFossils.indexOf(donation);
      newDonatedFossils.splice(donationIndex, 1);
      return {
        ...state,
        donatedFossils: newDonatedFossils,
      };
    case ADD_DONATED_ART:
      newDonatedArt.push(donation);
      return {
        ...state,
        donatedArt: newDonatedArt,
      };
    case REMOVE_DONATED_ART:
      donationIndex = newDonatedArt.indexOf(donation);
      newDonatedArt.splice(donationIndex, 1);
      return {
        ...state,
        donatedArt: newDonatedArt,
      };
    default:
      return state;
  }
};

// Action Creators
export const addDonatedFossil = donation => ({
  type: ADD_DONATED_FOSSIl,
  payload: donation,
});

export const removeDonatedFossil = donation => ({
  type: REMOVE_DONATED_FOSSIL,
  payload: donation,
});

export const addDonatedArt = donation => ({
  type: ADD_DONATED_ART,
  payload: donation,
});

export const removeDonatedArt = donation => ({
  type: REMOVE_DONATED_ART,
  payload: donation,
});

export default museumReducer;
