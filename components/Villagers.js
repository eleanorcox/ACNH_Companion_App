import React, {useState, useEffect} from 'react';
import {View, Text, Image, Button, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';

const villagers = require('@nooksbazaar/acdb/villagers.json');
import styles from '../stylesheets/VillagersStyles';

/* Filtering */

const FilterButtons = ({changeFilter}) => {
  const possibleGenderFilters = ['Female', 'Male'];
  const possibleSpeciesFilters = [
    'Alligator',
    'Bear',
    'Bird',
    'Bull',
    'Cat',
    'Chicken',
    'Cow',
    'Cub',
    'Deer',
    'Dog',
    'Duck',
    'Eagle',
    'Elephant',
    'Frog',
    'Goat',
    'Gorilla',
    'Hamster',
    'Hippo',
    'Horse',
    'Kangaroo',
    'Koala',
    'Lion',
    'Monkey',
    'Mouse',
    'Octopus',
    'Ostrich',
    'Penguin',
    'Pig',
    'Rabbit',
    'Rhino',
    'Sheep',
    'Squirrel',
    'Tiger',
    'Wolf',
  ];
  const possiblePersonalityFilters = [
    'Big Sister',
    'Cranky',
    'Jock',
    'Lazy',
    'Normal',
    'Peppy',
    'Smug',
    'Snooty',
  ];

  let genderButtons = possibleGenderFilters.map(filter => {
    return (
      <Button
        title={filter}
        onPress={() => {
          changeFilter(['gender', filter]);
        }}
      />
    );
  });

  let speciesButtons = possibleSpeciesFilters.map(filter => {
    return (
      <Button
        title={filter}
        onPress={() => {
          changeFilter(['species', filter]);
        }}
      />
    );
  });

  let personalityButtons = possiblePersonalityFilters.map(filter => {
    return (
      <Button
        title={filter}
        onPress={() => {
          changeFilter(['personality', filter]);
        }}
      />
    );
  });

  return (
    <View>
      {/* <View style={styles.buttons}>{genderButtons}</View> */}
      {/* <View style={styles.buttons}>{speciesButtons}</View> */}
      <View style={styles.buttons}>{personalityButtons}</View>
    </View>
  );
};

const updateFilters = (filters, filter) => {
  let filtersCopy = [...filters];
  let indexInFilters;
  for (let i = 0; i < filtersCopy.length; i++) {
    if (filtersCopy[i][0] === filter[0] && filtersCopy[i][1] === filter[1]) {
      indexInFilters = i;
    }
  }

  if (indexInFilters >= 0) {
    filtersCopy.splice(indexInFilters, 1); // Remove from filters
  } else {
    filtersCopy.push(filter); // Add to filters
  }
  return filtersCopy;
};

const filterData = filters => {
  let filteredVillagers = villagers;
  let genderFilters = [];
  let speciesFilters = [];
  let personalityFilters = [];

  for (let i = 0; i < filters.length; i++) {
    const filterType = filters[i][0];
    if (filterType === 'gender') {
      genderFilters.push(filters[i][1]);
    } else if (filterType === 'species') {
      speciesFilters.push(filters[i][1]);
    } else if (filterType === 'personality') {
      personalityFilters.push(filters[i][1]);
    }
  }

  if (genderFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < genderFilters.length; i++) {
      temp = temp.concat(
        filteredVillagers.filter(
          villager => villager.gender === genderFilters[i],
        ),
      );
    }
    filteredVillagers = temp;
  }

  if (speciesFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < speciesFilters.length; i++) {
      temp = temp.concat(
        filteredVillagers.filter(
          villager => villager.species === speciesFilters[i],
        ),
      );
    }
    filteredVillagers = temp;
  }

  if (personalityFilters.length > 0) {
    let temp = [];
    for (let i = 0; i < personalityFilters.length; i++) {
      temp = temp.concat(
        filteredVillagers.filter(
          villager => villager.personality === personalityFilters[i],
        ),
      );
    }
    filteredVillagers = temp;
  }

  return filteredVillagers;
};

/* Sorting */

const SortButtons = ({changeSort}) => {
  // eslint-disable-next-line prettier/prettier
  const sortByOptions = ['Name', 'Species', 'Gender', 'Personality', 'Birthday'];

  return (
    <View style={styles.buttons}>
      {sortByOptions.map(sortByOpt => {
        return (
          <Button
            title={sortByOpt}
            onPress={() => {
              changeSort(sortByOpt);
            }}
          />
        );
      })}
    </View>
  );
};

const updateSortAsc = (sortBy, newSortBy, sortAsc) => {
  let newSortAsc;
  if (sortBy !== newSortBy) {
    newSortAsc = 1;
  } else {
    newSortAsc = -sortAsc;
  }

  return newSortAsc;
};

const sortData = (villagerList, sortBy, asc) => {
  let villagerListCopy = [...villagerList];

  if (sortBy === 'Name') {
    villagerListCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });
  } else if (sortBy === 'Species') {
    villagerListCopy.sort((a, b) => {
      return a.species > b.species
        ? asc
        : a.species === b.species
        ? a.name > b.name
          ? 1
          : -1
        : -asc;
    });
  } else if (sortBy === 'Gender') {
    villagerListCopy.sort((a, b) => {
      return a.gender > b.gender
        ? asc
        : a.gender === b.gender
        ? a.name > b.name
          ? 1
          : -1
        : -asc;
    });
  } else if (sortBy === 'Personality') {
    villagerListCopy.sort((a, b) => {
      return a.personality > b.personality
        ? asc
        : a.personality === b.personality
        ? a.name > b.name
          ? 1
          : -1
        : -asc;
    });
  } else if (sortBy === 'Birthday') {
    villagerListCopy.sort((a, b) => {
      return a.birthday > b.birthday
        ? asc
        : a.birthday === b.birthday
        ? a.name > b.name
          ? 1
          : -1
        : -asc;
    });
  }

  return villagerListCopy;
};

/* ListControls */
const ListControls = ({listControls, updateControls}) => {
  const handleChangeFilter = newFilter => {
    const updatedFilters = updateFilters(listControls.filters, newFilter);
    const newControls = {
      filters: updatedFilters,
      sortBy: listControls.sortBy,
      sortAsc: listControls.sortAsc,
    };
    updateControls(newControls);
  };

  const handleChangeSort = newSortBy => {
    const newSortAsc = updateSortAsc(
      listControls.sortBy,
      newSortBy,
      listControls.sortAsc,
    );
    const newControls = {
      filters: listControls.filters,
      sortBy: newSortBy,
      sortAsc: newSortAsc,
    };
    updateControls(newControls);
  };

  return (
    <View>
      <FilterButtons changeFilter={handleChangeFilter} />
      <SortButtons changeSort={handleChangeSort} />
    </View>
  );
};

/* FlatList */

const Item = ({villager}) => {
  return (
    <View style={styles.villager}>
      <Text>Name: {villager.name}</Text>
      <Image source={{uri: villager.iconImage}} style={styles.image} />
      <Text>Species: {villager.species}</Text>
      <Text>Gender: {villager.gender}</Text>
      <Text>Personality: {villager.personality}</Text>
      <Text>Birthday: {villager.birthday}</Text>
      {/* <Text>Catchphrase: {villager.catchphrase}</Text>
      <Text>
        Favourite Colours: {villager.colors[0]}, {villager.colors[1]}
      </Text>
      <Text>
        Favourite Styles: {villager.styles[0]}, {villager.styles[1]}
      </Text> */}
    </View>
  );
};

const Villagers = ({navigation}) => {
  console.log('villagers');
  // listControls is an object with the following key-value pairs:
  // > filters: an array of filter arrays, e.g. [['gender', 'Female], ['species', 'Bear']]
  // > sortBy: a string indicating the sorting option e.g. 'Name' or 'Personality'
  // > sortAsc: a number indicating whether to sort in ascending or descending order, where ascending = 1 and descending = -1
  const [listControls, setListControls] = useState({
    filters: [],
    sortBy: 'Name',
    sortAsc: 1,
  });
  const [villagersToDisplay, setVillagersToDisplay] = useState(villagers);
  const [query, setQuery] = useState('');

  const searchFilterFunction = text => {
    const textData = text.toUpperCase();

    const newData = villagers.filter(villager => {
      const villagerData = villager.name.toUpperCase();
      return villagerData.includes(textData);
    });

    setQuery(text);
    setVillagersToDisplay(newData);
  };

  const updateControls = newListControls => {
    setListControls(newListControls);
  };

  useEffect(() => {
    const filteredVillagers = filterData(listControls.filters);
    const sortedVillagers = sortData(
      filteredVillagers,
      listControls.sortBy,
      listControls.sortAsc,
    );
    setVillagersToDisplay(sortedVillagers);
  }, [listControls]);

  return (
    <View style={styles.view}>
      <ListControls
        listControls={listControls}
        updateControls={updateControls}
      />
      <SearchBar
        placeholder="Search for villager..."
        lightTheme
        round
        style={styles.search}
        containerStyle={styles.searchContainer}
        onChangeText={text => searchFilterFunction(text)}
        autoCorrect={false}
        value={query}
      />
      <FlatList
        data={villagersToDisplay}
        renderItem={({item}) => <Item villager={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Villagers;
