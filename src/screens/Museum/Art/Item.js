import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {addDonatedArt, removeDonatedArt} from '../../../redux/museumReducer';

import styles from 'styles/museumStyles';

export const Item = ({art}) => {
  const dispatch = useDispatch();
  const donated = useSelector(state => state.museum.donatedArt);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{art.name}</Text>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <Image source={{uri: art.variants[0].image}} style={styles.image} />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <View style={styles.characteristicArt}>
              <Text>Real Title</Text>
            </View>
            <View style={styles.characteristicAnswerArt}>
              <Text>{art.realArtworkTitle}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.characteristicArt}>
              <Text>Artist</Text>
            </View>
            <View style={styles.characteristicAnswerArt}>
              <Text>{art.artist}</Text>
            </View>
          </View>
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
    </View>
  );
};
