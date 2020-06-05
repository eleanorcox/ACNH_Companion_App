import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';

import styles from 'styles/villagersStyles';

import {useSelector} from 'react-redux';

import {Item} from './Item';
import NoResults from 'utils/components/NoResults';

const items = require('@nooksbazaar/acdb/items.json');
const allArt = items.filter(item => item.sourceSheet === 'Art');

const Art = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [artToDisplay, setArtToDisplay] = useState(allArt);
  const donated = useSelector(state => state.museum.donatedArt);

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
    <View style={styles.view}>
      <SearchBar
        placeholder="Search..."
        lightTheme
        round
        style={styles.search}
        containerStyle={styles.searchContainer}
        onChangeText={text => searchFilterFunction(text)}
        autoCorrect={false}
        value={query}
      />
      <FlatList
        data={artToDisplay}
        renderItem={({item}) => <Item art={item} />}
        keyExtractor={item => item.uniqueEntryId}
        ListEmptyComponent={<NoResults numFilters={0} type={'allArt'} />}
      />
    </View>
  );
};

export default Art;
