import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from 'styles/crittersStyles';

import Bugs from './Bugs/Bugs';
import Fish from './Fish/Fish';
import {HEADER_TAB_YELLOW_DARK, HEADER_YELLOW_DARK} from 'assets/colours';

const Tab = createMaterialTopTabNavigator();

const CrittersTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={
        {
          // tabStyle: styles.tabs,
          // style: styles.tabs,
          // activeTintColor: HEADER_YELLOW_DARK,
        }
      }>
      <Tab.Screen name="Bugs" component={Bugs} />
      <Tab.Screen name="Fish" component={Fish} />
    </Tab.Navigator>
  );
};

const Critters = ({navigation}) => {
  return <CrittersTabs />;
};

export default Critters;
