import React, {useState} from 'react';
import {View, Text, Image, Button, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addResident,
  removeResident,
  addFavouriteVillager,
  removeFavouriteVillager,
} from '../../redux/villagersReducer';

import styles from 'styles/villagersStyles';

export const Item = ({villager}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = visible => {
    setModalVisible(visible);
  };
  const dispatch = useDispatch();
  const residents = useSelector(state => state.villagers.residents);
  const favourites = useSelector(state => state.villagers.favouriteVillagers);

  return (
    <View style={styles.villager}>
      <Text>Name: {villager.name}</Text>
      <Image source={{uri: villager.iconImage}} style={styles.image} />
      <Text>Species: {villager.species}</Text>
      <Text>Gender: {villager.gender}</Text>
      <Text>Personality: {villager.personality}</Text>
      <Text>Birthday: {villager.birthday}</Text>

      <View style={styles.buttons}>
        <Icon
          name={favourites.includes(villager) ? 'star' : 'star-border'}
          size={30}
          onPress={() => {
            favourites.includes(villager)
              ? dispatch(removeFavouriteVillager(villager))
              : dispatch(addFavouriteVillager(villager));
          }}
        />
        <Icon
          name="home"
          size={30}
          onPress={() => {
            residents.includes(villager)
              ? dispatch(removeResident(villager))
              : dispatch(addResident(villager));
          }}
        />
        <Icon
          name="more-horiz"
          size={30}
          onPress={() => {
            toggleModal(true);
          }}
        />
      </View>

      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.itemModalContent}>
          <View style={styles.itemView}>
            <Button
              title={'Close'}
              onPress={() => {
                toggleModal(false);
              }}
            />
            <Text>Catchphrase: {villager.catchphrase}</Text>
            <Text>
              Favourite Colours: {villager.colors[0]}, {villager.colors[1]}
            </Text>
            <Text>
              Favourite Styles: {villager.styles[0]}, {villager.styles[1]}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
