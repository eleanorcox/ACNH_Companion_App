import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addResident,
  removeResident,
  addFavouriteVillager,
  removeFavouriteVillager,
} from '../../redux/villagersReducer';

import {itemInList} from 'utils/itemInList';
import {posters} from 'utils/data';
import styles from 'styles/villagersStyles';

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

export const Item = ({villager}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = visible => {
    setModalVisible(visible);
  };

  const dispatch = useDispatch();
  const residents = useSelector(state => state.villagers.residents);
  const favourites = useSelector(state => state.villagers.favouriteVillagers);

  const villagerPoster = posters.filter(item =>
    item.name.includes(villager.name),
  );
  const villagerPosterImage = villagerPoster[0].variants[0].image;
  const villagerColoursStr = `${villager.colors[0]}, ${villager.colors[1]}`;
  const villagerStylesStr = `${villager.styles[0]}, ${villager.styles[1]}`;

  return (
    <View style={styles.villager}>
      <Text style={styles.name}>{villager.name}</Text>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <Image source={{uri: villager.iconImage}} style={styles.image} />
        </View>
        <View style={styles.rightContainer}>
          <InfoRow title="Species" result={villager.species} />
          <InfoRow title="Gender" result={villager.gender} />
          <InfoRow title="Personality" result={villager.personality} />
          <InfoRow title="Birthday" result={villager.birthday} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon
            name={itemInList(villager, favourites) ? 'star' : 'star-border'}
            size={35}
            onPress={() => {
              itemInList(villager, favourites)
                ? dispatch(removeFavouriteVillager(villager))
                : dispatch(addFavouriteVillager(villager));
            }}
          />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={itemInList(villager, residents) ? 'home' : 'home-outline'}
            size={35}
            onPress={() => {
              itemInList(villager, residents)
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

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          toggleModal(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={{uri: villagerPosterImage}} style={styles.poster} />
            <InfoRow title="Catchphrase" result={villager.catchphrase} />
            <InfoRow title="Favourite Colours" result={villagerColoursStr} />
            <InfoRow title="Favourite Styles" result={villagerStylesStr} />
            <TouchableOpacity
              onPress={() => {
                toggleModal(false);
              }}
              style={styles.closeModal}>
              <Text style={styles.textWhite}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
