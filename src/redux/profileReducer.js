const INITIAL_STATE = {
  playerName: 'Player',
  islandName: 'The Island',
  nativeFruit: 'Apple',
  hemisphere: 'northern',
  friendCode: 'XXXX-YYYY-ZZZZ',
};

// Action Types
const UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME';
const UPDATE_ISLAND_NAME = 'UPDATE_ISLAND_NAME';
const UPDATE_NATIVE_FRUIT = 'UPDATE_NATIVE_FRUIT';
const UPDATE_HEMISPHERE = 'UPDATE_HEMISPHERE';
const UPDATE_FRIEND_CODE = 'UPDATE_FRIEND_CODE';

// Reducer
const profileReducer = (state = INITIAL_STATE, action) => {
  const payload = action.payload;

  switch (action.type) {
    case UPDATE_PLAYER_NAME:
      return {
        ...state,
        playerName: payload,
      };
    case UPDATE_ISLAND_NAME:
      return {
        ...state,
        islandName: payload,
      };
    case UPDATE_NATIVE_FRUIT:
      return {
        ...state,
        nativeFruit: payload,
      };
    case UPDATE_HEMISPHERE:
      return {
        ...state,
        hemisphere: payload,
      };
    case UPDATE_FRIEND_CODE:
      return {
        ...state,
        friendCode: payload,
      };
    default:
      return state;
  }
};

// Action Creators
export const updatePlayerName = name => ({
  type: UPDATE_PLAYER_NAME,
  payload: name,
});

export const updateIslandName = name => ({
  type: UPDATE_ISLAND_NAME,
  payload: name,
});

export const updateNativeFruit = fruit => ({
  type: UPDATE_NATIVE_FRUIT,
  payload: fruit,
});

export const updateHemisphere = hemisphere => ({
  type: UPDATE_HEMISPHERE,
  payload: hemisphere,
});

export const updateFriendCode = code => ({
  type: UPDATE_FRIEND_CODE,
  payload: code,
});

export default profileReducer;
