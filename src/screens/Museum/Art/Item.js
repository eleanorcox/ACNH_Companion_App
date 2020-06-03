import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {addDonatedArt, removeDonatedArt} from '../../../redux/museumReducer';

import styles from 'styles/recipesStyles';

export const Item = ({art}) => {
  const dispatch = useDispatch();
  const donated = useSelector(state => state.museum.donatedArt);

  return (
    <View style={styles.recipe}>
      <Text>Name: {art.name}</Text>
      <Image source={{uri: art.variants[0].image}} style={styles.image} />
      <Text>Real Name: {art.realArtworkTitle}</Text>
      <Text>Artist: {art.artist}</Text>
      <View style={styles.buttons}>
        <Icon
          name={donated.includes(art) ? 'bookmark' : 'bookmark-border'}
          size={30}
          onPress={() => {
            donated.includes(art)
              ? dispatch(removeDonatedArt(art))
              : dispatch(addDonatedArt(art));
          }}
        />
      </View>
    </View>
  );
};
