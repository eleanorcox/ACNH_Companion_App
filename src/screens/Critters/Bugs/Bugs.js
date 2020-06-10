import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
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

const creatures = require('@nooksbazaar/acdb/creatures.json');
const allBugs = [];
for (let i = 0; i < creatures.length; i++) {
  const type = creatures[i].sourceSheet;
  if (type === 'Bugs') {
    allBugs.push(creatures[i]);
  }
}
for (let i = 0; i < allBugs.length; i++) {
  let name = allBugs[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  allBugs[i].name = name;
}

const Bugs = ({navigation}) => {
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

  const [bugsToDisplay, setBugsToDisplay] = useState(allBugs);
  const [modalVisible, setModalVisible] = useState(false);
  const caught = useSelector(state => state.bugs.caughtBugs);
  const donated = useSelector(state => state.bugs.donatedBugs);
  const hemisphere = useSelector(state => state.profile.hemisphere);

  const updateControls = newListControls => {
    setListControls(newListControls);
  };

  useEffect(() => {
    const filteredBugs = filterData(
      allBugs,
      listControls.filters,
      listControls.searchQuery,
      caught,
      donated,
      hemisphere,
    );

    const sortedBugs = sortData(
      filteredBugs,
      listControls.sortBy,
      listControls.sortAsc,
      caught,
      donated,
    );

    setBugsToDisplay(sortedBugs);
  }, [listControls, caught, donated, hemisphere]);

  const toggleModal = visible => {
    setModalVisible(visible);
  };

  return (
    <SafeAreaView style={styles.view}>
      <Modal animationType={'slide'} transparent={false} visible={modalVisible}>
        <View style={styles.controlsContainerBugs}>
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
        data={bugsToDisplay}
        renderItem={({item}) => <Item bug={item} />}
        keyExtractor={item => item.uniqueEntryId}
        contentContainerStyle={styles.flatList}
        ListEmptyComponent={
          <NoResults numFilters={listControls.filters.length} type={'bugs'} />
        }
      />
    </SafeAreaView>
  );
};

export default Bugs;
