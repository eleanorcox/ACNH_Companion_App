import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useSelector} from 'react-redux';

import styles from 'styles/crittersStyles';

import ListControls from 'utils/components/ListControls';
import {filterOptions, sortOptions} from './filterSortOptions';
import {filterData} from './filterData';
import {sortData} from './sortData';
import {Item} from './Item';
import NoResults from 'utils/components/NoResults';
import {allFish} from 'utils/data';

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
    <SafeAreaView style={styles.view}>
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
            <View style={styles.alignCenter}>
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
        data={fishToDisplay}
        renderItem={({item}) => <Item fish={item} />}
        keyExtractor={item => item.uniqueEntryId}
        contentContainerStyle={styles.flatList}
        ListEmptyComponent={
          <NoResults numFilters={listControls.filters.length} type={'fish'} />
        }
      />
    </SafeAreaView>
  );
};

export default Fish;
