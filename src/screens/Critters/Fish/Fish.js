import React from 'react';
import {View, Text} from 'react-native';

import styles from 'styles/AppStyles';
const creatures = require('@nooksbazaar/acdb/creatures.json'); // array of objects
const allFish = [];

for (let i = 0; i < creatures.length; i++) {
  const type = creatures[i].sourceSheet;
  if (type === 'Fish') {
    allFish.push(creatures[i]);
  }
}

const Fish = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text>Fish</Text>
    </View>
  );
};

export default Fish;
