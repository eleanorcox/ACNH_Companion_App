const INITIAL_STATE = {
  caughtBugs: [],
  donatedBugs: [],
};

// Action Types
const ADD_CAUGHT_BUG = 'ADD_CAUGHT_BUG';
const REMOVE_CAUGHT_BUG = 'REMOVE_CAUGHT_BUG';
const ADD_DONATED_BUG = 'ADD_DONATED_BUG';
const REMOVE_DONATED_BUG = 'REMOVE_DONATED_BUG';

// Reducer
const bugsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // const bug = action.payload; //TODO: Refactor
    case ADD_CAUGHT_BUG:
      const caughtBug = action.payload;
      const newCaughtBugs = [...state.caughtBugs];
      newCaughtBugs.push(caughtBug);
      return {
        ...state,
        caughtBugs: newCaughtBugs,
      };
    case REMOVE_CAUGHT_BUG:
      const caughtBugToRemove = action.payload;
      const removeFromCaught = [...state.caughtBugs];
      const caughtBugToRemoveIndex = removeFromCaught.indexOf(
        caughtBugToRemove,
      );
      removeFromCaught.splice(caughtBugToRemoveIndex, 1);
      return {
        ...state,
        caughtBugs: removeFromCaught,
      };
    case ADD_DONATED_BUG:
      const donatedBug = action.payload;
      const newDonatedBugs = [...state.donatedBugs];
      newDonatedBugs.push(donatedBug);
      return {
        ...state,
        donatedBugs: newDonatedBugs,
      };
    case REMOVE_DONATED_BUG:
      const donatedBugToRemove = action.payload;
      const removeFromDonated = [...state.donatedBugs];
      const donatedBugToRemoveIndex = removeFromDonated.indexOf(
        donatedBugToRemove,
      );
      removeFromDonated.splice(donatedBugToRemoveIndex, 1);
      return {
        ...state,
        donatedBugs: removeFromDonated,
      };
    default:
      return state;
  }
};

// Action Creators
export const addCaughtBug = bug => ({
  type: ADD_CAUGHT_BUG,
  payload: bug,
});

export const removeCaughtBug = bug => ({
  type: REMOVE_CAUGHT_BUG,
  payload: bug,
});

export const addDonatedBug = bug => ({
  type: ADD_DONATED_BUG,
  payload: bug,
});

export const removeDonatedBug = bug => ({
  type: REMOVE_DONATED_BUG,
  payload: bug,
});

export default bugsReducer;
