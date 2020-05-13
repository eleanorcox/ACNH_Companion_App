import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView
} from 'react-native';
import styles from "../stylesheets/AppStyles";

const items = require('@nooksbazaar/acdb/items.json');
let furniture = [];
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.sourceSheet === 'Housewares' || item.sourceSheet === 'Miscellaneous' || item.sourceSheet === 'Wall-mounted') {
        furniture.push(item);
    }
}

const Item = ({furniture}) => {
  return (
    <View>
      <Text>Name: {furniture.name}</Text>
    </View>
  );
}

const Furniture = ({navigation}) => {
  return (
    <SafeAreaView style={styles.view}>
        <Text>Furniture</Text>
        <FlatList
          data={furniture}
          renderItem={({item}) => (
            <Item furniture={item}/>
          )}
          // keyExtractor={item => item.uniqueEntryId}  
        />
    </SafeAreaView>
  );
};

export default Furniture;
