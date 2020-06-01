import React, {useState, useEffect} from 'react';
import {View, Button, FlatList, Modal} from 'react-native';

import {useSelector} from 'react-redux';

import styles from 'styles/VillagersStyles';

import {filterData} from './filterData';
import {sortData} from './sortData';
import {ListControls} from './ListControls';
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
    );

    const sortedBugs = sortData(
      filteredBugs,
      listControls.sortBy,
      listControls.sortAsc,
      caught,
      donated,
    );

    setBugsToDisplay(sortedBugs);
  }, [listControls, caught, donated]);

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
        data={bugsToDisplay}
        renderItem={({item}) => <Item bug={item} />}
        keyExtractor={item => item.uniqueEntryId}
        ListEmptyComponent={
          <NoResults numFilters={listControls.filters.length} type={'bugs'} />
        }
      />
    </View>
  );
};

export default Bugs;
