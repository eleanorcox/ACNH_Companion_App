import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Item} from './Item';
import NoResults from 'utils/components/NoResults';

import styles from 'styles/museumStyles';

const items = require('@nooksbazaar/acdb/items.json');
const fossils = items.filter(item => item.sourceSheet === 'Fossils');
for (let i = 0; i < fossils.length; i++) {
  let name = fossils[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  fossils[i].name = name;
}

const Fossils = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [fossilsToDisplay, setFossilsToDisplay] = useState(fossils);

  useEffect(() => {
    let filteredFossils = fossils;
    if (query !== '') {
      const queryCaps = query.toUpperCase();
      filteredFossils = fossils.filter(fossil => {
        const fossilName = fossil.name.toUpperCase();
        return fossilName.includes(queryCaps);
      });
    }

    setFossilsToDisplay(filteredFossils);
  }, [query]);

  const searchFilterFunction = text => {
    setQuery(text);
  };

  return (
    <SafeAreaView style={styles.view}>
      <SearchBar
        placeholder="Search..."
        lightTheme
        round
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInput}
        onChangeText={text => searchFilterFunction(text)}
        autoCorrect={false}
        value={query}
      />
      <FlatList
        data={fossilsToDisplay}
        renderItem={({item}) => <Item fossil={item} />}
        keyExtractor={item => item.uniqueEntryId}
        ListEmptyComponent={<NoResults numFilters={0} type={'fossils'} />}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default Fossils;
