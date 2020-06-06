import 'react-native-gesture-handler'; // Must be at top of file
import React from 'react';
import styles from 'styles/appStyles';

// Redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';
import Critters from './src/screens/Critters/Critters';
import Bugs from './src/screens/Critters/Bugs/Bugs';
import Fish from './src/screens/Critters/Fish/Fish';
import Museum from './src/screens/Museum/Museum';
import Fossils from './src/screens/Museum/Fossils/Fossils';
import Art from './src/screens/Museum/Art/Art';
import Items from './src/screens/Items/Items';
import Stalks from './src/screens/Stalks/Stalks';
import Todo from './src/screens/Todo/Todo';
import Guides from './src/screens/Guides/Guides';
import Recipes from './src/screens/Recipes/Recipes';
import Villagers from './src/screens/Villagers/Villagers';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: styles.headerBackground,
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              cardStyle: styles.screenBackground,
              // gestureEnabled: true,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Critters" component={Critters} />
            <Stack.Screen name="Bugs" component={Bugs} />
            <Stack.Screen name="Fish" component={Fish} />
            <Stack.Screen name="Museum" component={Museum} />
            <Stack.Screen name="Fossils" component={Fossils} />
            <Stack.Screen name="Art" component={Art} />
            <Stack.Screen name="Items" component={Items} />
            <Stack.Screen name="Stalks" component={Stalks} />
            <Stack.Screen name="Todo" component={Todo} />
            <Stack.Screen name="Guides" component={Guides} />
            <Stack.Screen name="Recipes" component={Recipes} />
            <Stack.Screen
              name="Villagers"
              component={Villagers}
              options={{
                headerStyle: styles.blue,
                cardStyle: styles.lightBlue,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
