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
import Museum from './src/screens/Museum/Museum';
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
              headerStyle: styles.green,
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              cardStyle: styles.screenBackground,
              // gestureEnabled: true,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerStyle: styles.headerGreen,
                cardStyle: styles.green,
              }}
            />
            <Stack.Screen
              name="Critters"
              component={Critters}
              options={{
                headerStyle: styles.headerDarkYellow,
                cardStyle: styles.darkYellow,
              }}
            />
            <Stack.Screen
              name="Museum"
              component={Museum}
              options={{
                headerStyle: styles.headerPink,
                cardStyle: styles.pink,
              }}
            />
            <Stack.Screen
              name="Items"
              component={Items}
              options={{
                headerStyle: styles.headerYellow,
                cardStyle: styles.yellow,
              }}
            />
            <Stack.Screen
              name="Stalks"
              component={Stalks}
              options={{
                headerStyle: styles.headerChartreuse,
                cardStyle: styles.chartreuse,
              }}
            />
            <Stack.Screen
              name="Todo"
              component={Todo}
              options={{
                headerStyle: styles.headerBlue,
                cardStyle: styles.blue,
              }}
            />
            <Stack.Screen
              name="Guides"
              component={Guides}
              options={{
                headerStyle: styles.headerPurple,
                cardStyle: styles.purple,
              }}
            />
            <Stack.Screen
              name="Recipes"
              component={Recipes}
              options={{
                headerStyle: styles.headerOrange,
                cardStyle: styles.orange,
              }}
            />
            <Stack.Screen
              name="Villagers"
              component={Villagers}
              options={{
                headerStyle: styles.headerLightBlue,
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
