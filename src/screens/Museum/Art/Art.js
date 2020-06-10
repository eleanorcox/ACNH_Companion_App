import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Item} from './Item';
import NoResults from 'utils/components/NoResults';
import {allArt} from 'utils/data';

import styles from 'styles/museumStyles';

const Art = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [artToDisplay, setArtToDisplay] = useState(allArt);

  useEffect(() => {
    let filteredArt = allArt;
    if (query !== '') {
      const queryCaps = query.toUpperCase();
      filteredArt = allArt.filter(art => {
        const artName = art.name.toUpperCase();
        return artName.includes(queryCaps);
      });
    }

    setArtToDisplay(filteredArt);
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
        data={artToDisplay}
        renderItem={({item}) => <Item art={item} />}
        keyExtractor={item => item.uniqueEntryId}
        ListEmptyComponent={<NoResults numFilters={0} type={'art'} />}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default Art;
