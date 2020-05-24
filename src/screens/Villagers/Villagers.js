import React, {useState, useEffect} from 'react';
import {View, Button, FlatList, Modal} from 'react-native';

import {useSelector} from 'react-redux';

const allVillagers = require('@nooksbazaar/acdb/villagers.json');
import styles from 'styles/VillagersStyles';

import {filterData} from './filterData';
import {sortData} from './sortData';
import {ListControls} from './ListControls';
import {Item} from './Item';
import {NoResults} from 'utils/components/NoResults';

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
  const residents = useSelector(state => state.residents);
  const favourites = useSelector(state => state.favouriteVillagers);

  const updateControls = newListControls => {
    setListControls(newListControls);
  };

  useEffect(() => {
    let filteredVillagers;

    if (listControls.searchQuery !== '') {
      const query = listControls.searchQuery.toUpperCase();

      const searchResults = allVillagers.filter(villager => {
        const villagerData = villager.name.toUpperCase();
        return villagerData.includes(query);
      });

      filteredVillagers = filterData(
        searchResults,
        listControls.filters,
        favourites,
        residents,
      );
    } else {
      filteredVillagers = filterData(
        allVillagers,
        listControls.filters,
        favourites,
        residents,
      );
    }

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
      <Modal animationType={'slide'} transparent={false} visible={modalVisible}>
        <ListControls
          listControls={listControls}
          updateControls={updateControls}
        />
        <Button
          title={'Close Controls'}
          onPress={() => {
            toggleModal(false);
          }}
        />
      </Modal>
      <Button
        title={'Open Controls'}
        onPress={() => {
          toggleModal(true);
        }}
      />
      <FlatList
        data={villagersToDisplay}
        renderItem={({item}) => <Item villager={item} />}
        keyExtractor={item => item.name}
        ListEmptyComponent={NoResults(listControls.filters.length, 'villagers')}
      />
    </View>
  );
};

export default Villagers;
