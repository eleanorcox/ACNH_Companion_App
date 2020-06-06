import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from 'styles/crittersStyles';

import Bugs from './Bugs/Bugs';
import Fish from './Fish/Fish';
import {GRAY_DARKER} from 'assets/colours';

const Tab = createMaterialTopTabNavigator();

const CrittersTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabs,
        activeTintColor: GRAY_DARKER,
      }}>
      <Tab.Screen name="Bugs" component={Bugs} />
      <Tab.Screen name="Fish" component={Fish} />
    </Tab.Navigator>
  );
};

const Critters = () => {
  return <CrittersTabs />;
};

export default Critters;
