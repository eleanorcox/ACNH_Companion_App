import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, FlatList, Modal} from 'react-native';

import {useSelector} from 'react-redux';

import styles from 'styles/crittersStyles';

import ListControls from 'utils/components/ListControls';
import {filterOptions, sortOptions} from './filterSortOptions';
import {filterData} from './filterData';
import {sortData} from './sortData';
import {Item} from './Item';
import NoResults from 'utils/components/NoResults';

const creatures = require('@nooksbazaar/acdb/creatures.json');
const allFish = [];
for (let i = 0; i < creatures.length; i++) {
  const type = creatures[i].sourceSheet;
  if (type === 'Fish') {
    allFish.push(creatures[i]);
  }
}
for (let i = 0; i < allFish.length; i++) {
  let name = allFish[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  allFish[i].name = name;
}

const Fish = ({navigation}) => {
  // listControls is an object with the following key-value pairs:
  // > filters: an array of filter arrays, e.g. [['month', 'January']]
  // > sortBy: a string indicating the sorting option e.g. 'Name' or 'Critterpedia'
  // > sortAsc: a number indicating whether to sort in ascending or descending order, where ascending = 1 and descending = -1
  // > searchQuery: a string representing the text typed into the search bar
  const [listControls, setListControls] = useState({
    filters: [],
    sortBy: 'Name',
    sortAsc: 1,
    searchQuery: '',
  });

  const [fishToDisplay, setFishToDisplay] = useState(allFish);
  const [modalVisible, setModalVisible] = useState(false);
  const caught = useSelector(state => state.fish.caughtFish);
  const donated = useSelector(state => state.fish.donatedFish);
  const hemisphere = useSelector(state => state.profile.hemisphere);

  const updateControls = newListControls => {
    setListControls(newListControls);
  };

  useEffect(() => {
    const filteredFish = filterData(
      allFish,
      listControls.filters,
      listControls.searchQuery,
      caught,
      donated,
      hemisphere,
    );

    const sortedFish = sortData(
      filteredFish,
      listControls.sortBy,
      listControls.sortAsc,
      caught,
      donated,
    );

    setFishToDisplay(sortedFish);
  }, [listControls, caught, donated, hemisphere]);

  const toggleModal = visible => {
    setModalVisible(visible);
  };

  return (
    <View style={styles.view}>
      <Modal animationType={'slide'} transparent={false} visible={modalVisible}>
        <ListControls
          listControls={listControls}
          updateControls={updateControls}
          filterOptions={filterOptions}
          sortOptions={sortOptions}
        />
        <TouchableOpacity
          onPress={() => {
            toggleModal(false);
          }}
          style={styles.controlButton}>
          <Text>Close Controls</Text>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          toggleModal(true);
        }}
        style={styles.controlButton}>
        <Text>Open Controls</Text>
      </TouchableOpacity>
      <FlatList
        data={fishToDisplay}
        renderItem={({item}) => <Item fish={item} />}
        keyExtractor={item => item.uniqueEntryId}
        ListEmptyComponent={
          <NoResults numFilters={listControls.filters.length} type={'fish'} />
        }
      />
    </View>
  );
};

export default Fish;
