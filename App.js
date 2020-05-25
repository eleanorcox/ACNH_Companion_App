import 'react-native-gesture-handler'; // Must be at top of file
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import villagersReducer from './src/redux/villagersReducer';
import recipesReducer from './src/redux/recipesReducer';
const reducer = combineReducers({
  villagers: villagersReducer,
  recipes: recipesReducer,
});

import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';
import Critters from './src/screens/Critters/Critters';
import Bugs from './src/screens/Critters/Bugs/Bugs';
import Fish from './src/screens/Critters/Fish/Fish';
import Furniture from './src/screens/Furniture/Furniture';
import Guides from './src/screens/Guides/Guides';
import Recipes from './src/screens/Recipes/Recipes';
import Villagers from './src/screens/Villagers/Villagers';

const Stack = createStackNavigator();

const App = () => {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Critters" component={Critters} />
          <Stack.Screen name="Bugs" component={Bugs} />
          <Stack.Screen name="Fish" component={Fish} />
          <Stack.Screen name="Furniture" component={Furniture} />
          <Stack.Screen name="Guides" component={Guides} />
          <Stack.Screen name="Recipes" component={Recipes} />
          <Stack.Screen name="Villagers" component={Villagers} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
