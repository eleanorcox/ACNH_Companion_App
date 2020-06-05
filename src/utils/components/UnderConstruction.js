import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from 'styles/appStyles';

const items = require('@nooksbazaar/acdb/items.json');
const housewares = items.filter(item => item.sourceSheet === 'Housewares');
const constructionSigns = housewares.filter(
  item => item.name === 'construction sign',
);

const UnderConstruction = ({navigation}) => {
  const randomIndex = Math.round(Math.random() * 4);

  return (
    <View style={styles.view}>
      <Image
        source={{uri: constructionSigns[0].variants[randomIndex].image}}
        style={styles.image}
      />
      <Text>This page is currently under construction!</Text>
      <Text>Please check back later</Text>
    </View>
  );
};

export default UnderConstruction;
