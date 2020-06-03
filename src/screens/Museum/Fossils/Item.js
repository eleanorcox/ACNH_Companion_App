import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addDonatedFossil,
  removeDonatedFossil,
} from '../../../redux/museumReducer';

import styles from 'styles/recipesStyles';

// TODO: Order fossils by collection (i.e. all diplodocus together)
export const Item = ({fossil}) => {
  const dispatch = useDispatch();
  const donated = useSelector(state => state.museum.donatedFossils);

  return (
    <View style={styles.recipe}>
      <Text>Name: {fossil.name}</Text>
      <Image source={{uri: fossil.variants[0].image}} style={styles.image} />
      <Text>Sell: {fossil.variants[0].sell}</Text>
      <View style={styles.buttons}>
        <Icon
          name={donated.includes(fossil) ? 'bookmark' : 'bookmark-border'}
          size={30}
          onPress={() => {
            donated.includes(fossil)
              ? dispatch(removeDonatedFossil(fossil))
              : dispatch(addDonatedFossil(fossil));
          }}
        />
      </View>
    </View>
  );
};
