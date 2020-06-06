import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Bugs from './Bugs/Bugs';
import Fish from './Fish/Fish';

const Tab = createMaterialTopTabNavigator();

const CrittersTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bugs" component={Bugs} />
      <Tab.Screen name="Fish" component={Fish} />
    </Tab.Navigator>
  );
};

const Critters = ({navigation}) => {
  return <CrittersTabs />;
};

export default Critters;
