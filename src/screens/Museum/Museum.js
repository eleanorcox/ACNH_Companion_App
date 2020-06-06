import React from 'react';
import styles from 'styles/museumStyles';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Fossils from './Fossils/Fossils';
import Art from './Art/Art';
import {GRAY_DARKER} from 'assets/colours';

const Tab = createMaterialTopTabNavigator();

const MuseumTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.background,
        activeTintColor: GRAY_DARKER,
      }}>
      <Tab.Screen name="Fossils" component={Fossils} />
      <Tab.Screen name="Art" component={Art} />
    </Tab.Navigator>
  );
};

const Museum = ({navigation}) => {
  return <MuseumTabs />;
};

export default Museum;
