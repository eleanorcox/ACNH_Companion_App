import 'react-native-gesture-handler';  // Must be at top of file
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Home from "./components/Home";
import Profile from "./components/Profile";
import Collectibles from "./components/Collectibles";
import Calendar from "./components/Calendar";
import Furniture from "./components/Furniture";
import Guides from "./components/Guides";
import Recipes from "./components/Recipes";
import Villagers from "./components/Villagers";

const Stack = createStackNavigator();

const App = () => {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Collectibles" component={Collectibles} />
          <Stack.Screen name="Calendar" component={Calendar} />
          <Stack.Screen name="Furniture" component={Furniture} />
          <Stack.Screen name="Guides" component={Guides} />
          <Stack.Screen name="Recipes" component={Recipes} />
          <Stack.Screen name="Villagers" component={Villagers} />
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  );
};

export default App;
