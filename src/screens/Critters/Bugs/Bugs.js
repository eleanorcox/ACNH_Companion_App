import React, {useState, useEffect} from 'react';
import {View, Button, FlatList, Modal} from 'react-native';

import styles from 'styles/AppStyles';

import {Item} from './Item';
import {NoResults} from 'utils/components/NoResults';

const creatures = require('@nooksbazaar/acdb/creatures.json');
const allBugs = [];
for (let i = 0; i < creatures.length; i++) {
  const type = creatures[i].sourceSheet;
  if (type === 'Bugs') {
    allBugs.push(creatures[i]);
  }
}

const Bugs = ({navigation}) => {
  const [bugsToDisplay, setBugsToDisplay] = useState(allBugs);

  return (
    <View style={styles.view}>
      <FlatList
        data={bugsToDisplay}
        renderItem={({item}) => <Item bug={item} />}
        keyExtractor={item => item.uniqueEntryId}
        ListEmptyComponent={NoResults(0, 'bugs')}
      />
    </View>
  );
};

export default Bugs;
