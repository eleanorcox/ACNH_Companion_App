import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Reducers
import profileReducer from './profileReducer';
import villagersReducer from './villagersReducer';
import recipesReducer from './recipesReducer';
import bugsReducer from './bugsReducer';
import fishReducer from './fishReducer';
import museumReducer from './museumReducer';
const rootReducer = combineReducers({
  profile: profileReducer,
  villagers: villagersReducer,
  recipes: recipesReducer,
  bugs: bugsReducer,
  fish: fishReducer,
  museum: museumReducer,
});

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['profile', 'villagers', 'recipes', 'bugs', 'fish', 'museum'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux store
export const store = createStore(persistedReducer);

// Middleware: Redux Persist Persister
export const persistor = persistStore(store);
