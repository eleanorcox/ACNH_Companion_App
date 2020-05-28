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
  const bug = action.payload;
  const newCaughtBugs = [...state.caughtBugs];
  const newDonatedBugs = [...state.donatedBugs];
  let bugIndex;

  switch (action.type) {
    case ADD_CAUGHT_BUG:
      newCaughtBugs.push(bug);
      return {
        ...state,
        caughtBugs: newCaughtBugs,
      };
    case REMOVE_CAUGHT_BUG:
      bugIndex = newCaughtBugs.indexOf(bug);
      newCaughtBugs.splice(bugIndex, 1);
      return {
        ...state,
        caughtBugs: newCaughtBugs,
      };
    case ADD_DONATED_BUG:
      newDonatedBugs.push(bug);
      return {
        ...state,
        donatedBugs: newDonatedBugs,
      };
    case REMOVE_DONATED_BUG:
      bugIndex = newDonatedBugs.indexOf(bug);
      newDonatedBugs.splice(bugIndex, 1);
      return {
        ...state,
        donatedBugs: newDonatedBugs,
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
