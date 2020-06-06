import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addDonatedFossil,
  removeDonatedFossil,
} from '../../../redux/museumReducer';

import styles from 'styles/museumStyles';

// TODO: Order fossils by collection (i.e. all diplodocus together)
export const Item = ({fossil}) => {
  const dispatch = useDispatch();
  const donated = useSelector(state => state.museum.donatedFossils);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          {/* <Image
            source={{uri: fossil.variants[0].image}}
            style={styles.image}
          /> */}
          <Text style={styles.name}>{fossil.name}</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <View style={styles.characteristic}>
              <Text>Sell</Text>
            </View>
            <View style={styles.characteristicAnswer}>
              <Text>{fossil.variants[0].sell}</Text>
            </View>
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
      </View>
    </View>
  );
};
