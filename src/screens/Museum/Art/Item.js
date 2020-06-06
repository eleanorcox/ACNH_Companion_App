import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {addDonatedArt, removeDonatedArt} from '../../../redux/museumReducer';

import styles from 'styles/museumStyles';

const InfoRow = ({title, result}) => {
  return (
    <View style={styles.row}>
      <View style={styles.characteristic}>
        <Text style={styles.textWhite}>{title}</Text>
      </View>
      <View style={styles.characteristicAnswer}>
        <Text style={styles.textDarkGrey}>{result}</Text>
      </View>
    </View>
  );
};

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
          <InfoRow title="Real Title" result={art.realArtworkTitle} />
          <InfoRow title="Artist" result={art.artist} />
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
