import React from 'react';
import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
  },

  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UnderConstruction;
