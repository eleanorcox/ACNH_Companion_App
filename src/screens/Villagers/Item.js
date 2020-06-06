import React, {useState} from 'react';
import {View, Text, Image, Button, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addResident,
  removeResident,
  addFavouriteVillager,
  removeFavouriteVillager,
} from '../../redux/villagersReducer';

import styles from 'styles/villagersStyles';
const items = require('@nooksbazaar/acdb/items.json');

export const Item = ({villager}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = visible => {
    setModalVisible(visible);
  };
  const dispatch = useDispatch();
  const residents = useSelector(state => state.villagers.residents);
  const favourites = useSelector(state => state.villagers.favouriteVillagers);

  const villagerName = villager.name;
  const posters = items.filter(item => item.sourceSheet === 'Posters');
  const villagerPoster = posters.filter(item =>
    item.name.includes(villagerName),
  );
  const villagerPosterImage = villagerPoster[0].variants[0].image;

  return (
    <View style={styles.villager}>
      <Text style={styles.name}>{villager.name}</Text>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <Image source={{uri: villager.iconImage}} style={styles.image} />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <View style={styles.characteristic}>
              <Text>Species</Text>
            </View>
            <View style={styles.characteristicAnswer}>
              <Text>{villager.species}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.characteristic}>
              <Text>Gender</Text>
            </View>
            <View style={styles.characteristicAnswer}>
              <Text>{villager.gender}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.characteristic}>
              <Text>Personality</Text>
            </View>
            <View style={styles.characteristicAnswer}>
              <Text>{villager.personality}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.characteristic}>
              <Text>Birthday</Text>
            </View>
            <View style={styles.characteristicAnswer}>
              <Text>{villager.birthday}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon
            name={favourites.includes(villager) ? 'star' : 'star-border'}
            size={35}
            onPress={() => {
              favourites.includes(villager)
                ? dispatch(removeFavouriteVillager(villager))
                : dispatch(addFavouriteVillager(villager));
            }}
          />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={residents.includes(villager) ? 'home' : 'home-outline'}
            size={35}
            onPress={() => {
              residents.includes(villager)
                ? dispatch(removeResident(villager))
                : dispatch(addResident(villager));
            }}
          />
        </View>
        <View style={styles.icon}>
          <Icon
            name="more-horiz"
            size={35}
            onPress={() => {
              toggleModal(true);
            }}
          />
        </View>
      </View>

      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={{uri: villagerPosterImage}} style={styles.poster} />
            <View style={styles.row}>
              <View style={styles.characteristic}>
                <Text>Catchphrase</Text>
              </View>
              <View style={styles.characteristicAnswer}>
                <Text>{villager.catchphrase}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.characteristic}>
                <Text>Favourite Colours</Text>
              </View>
              <View style={styles.characteristicAnswer}>
                <Text>
                  {villager.colors[0]}, {villager.colors[1]}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.characteristic}>
                <Text>Favourite Styles</Text>
              </View>
              <View style={styles.characteristicAnswer}>
                <Text>
                  {villager.styles[0]}, {villager.styles[1]}
                </Text>
              </View>
            </View>
            <Button
              title={'Close'}
              onPress={() => {
                toggleModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
