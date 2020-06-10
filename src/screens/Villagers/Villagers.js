import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

const allVillagers = require('@nooksbazaar/acdb/villagers.json');
import styles from 'styles/villagersStyles';

import ListControls from 'utils/components/ListControls';
import {filterOptions, sortOptions} from './filterSortOptions';
import {filterData} from './filterData';
import {sortData} from './sortData';
import {Item} from './Item';
import NoResults from 'utils/components/NoResults';

const Villagers = () => {
  // listControls is an object with the following key-value pairs:
  // > filters: an array of filter arrays, e.g. [['gender', 'Female], ['species', 'Bear']]
  // > sortBy: a string indicating the sorting option e.g. 'Name' or 'Personality'
  // > sortAsc: a number indicating whether to sort in ascending or descending order, where ascending = 1 and descending = -1
  // > searchQuery: a string representing the text typed into the search bar
  const [listControls, setListControls] = useState({
    filters: [],
    sortBy: 'Name',
    sortAsc: 1,
    searchQuery: '',
  });
  const [villagersToDisplay, setVillagersToDisplay] = useState(allVillagers);
  const [modalVisible, setModalVisible] = useState(false);
  const residents = useSelector(state => state.villagers.residents);
  const favourites = useSelector(state => state.villagers.favouriteVillagers);

  const updateControls = newListControls => {
    setListControls(newListControls);
  };

  useEffect(() => {
    const filteredVillagers = filterData(
      allVillagers,
      listControls.filters,
      listControls.searchQuery,
      favourites,
      residents,
    );

    const sortedVillagers = sortData(
      filteredVillagers,
      listControls.sortBy,
      listControls.sortAsc,
      favourites,
      residents,
    );

    setVillagersToDisplay(sortedVillagers);
  }, [listControls, favourites, residents]);

  const toggleModal = visible => {
    setModalVisible(visible);
  };

  return (
    <View style={styles.view}>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          toggleModal(false);
        }}>
        <View style={styles.controlsContainer}>
          <ScrollView>
            <ListControls
              listControls={listControls}
              updateControls={updateControls}
              filterOptions={filterOptions}
              sortOptions={sortOptions}
            />
            <View style={styles.controlsContainer}>
              <TouchableOpacity
                onPress={() => {
                  toggleModal(false);
                }}
                style={styles.controlButton}>
                <Text style={styles.textWhite}>Close Controls</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          toggleModal(true);
        }}
        style={styles.controlButton}>
        <Text style={styles.textWhite}>Open Controls</Text>
      </TouchableOpacity>
      <FlatList
        data={villagersToDisplay}
        renderItem={({item}) => <Item villager={item} />}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.flatList}
        ListEmptyComponent={
          <NoResults
            numFilters={listControls.filters.length}
            type={'villagers'}
          />
        }
      />
    </View>
  );
};

export default Villagers;
