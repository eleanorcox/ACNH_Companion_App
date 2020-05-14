import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView, Button, FlatList} from 'react-native';

const villagers = require('@nooksbazaar/acdb/villagers.json');
import styles from '../stylesheets/VillagersStyles';

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
      <View style={styles.buttons}>{speciesButtons}</View>
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

const ListControls = ({listControls, updateControls}) => {
  const filters = listControls[0];
  const sortBy = listControls[1];
  const sortAsc = listControls[2];

  const handleChangeFilter = newFilter => {
    const updatedFilters = updateFilters(filters, newFilter);
    const newControls = [updatedFilters, sortBy, sortAsc];
    updateControls(newControls);
  };

  const handleChangeSort = newSortBy => {
    const newSortAsc = updateSortAsc(sortBy, newSortBy, sortAsc);
    const newControls = [filters, newSortBy, newSortAsc];
    updateControls(newControls);
  };

  return (
    <View>
      <FilterButtons filters={filters} changeFilter={handleChangeFilter} />
      <SortButtons sortBy={sortBy} changeSort={handleChangeSort} />
    </View>
  );
};

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
  // listControls is an array of the form [filters, sortBy, sortAsc] where:
  // > filters is an array of filter arrays, e.g. [['gender', 'Female], ['species', 'Bear']]
  // > sortBy is a string indicating the sorting option e.g. 'Name' or 'Personality'
  // > sortAsc is a number indicating whether to sort in ascending or descending order, where ascending = 1 and descending = -1
  const [listControls, setListControls] = useState([[], 'Name', 1]);
  const [villagersToDisplay, setVillagersToDisplay] = useState(villagers);

  const updateControls = newListControls => {
    setListControls(newListControls);
  };

  useEffect(() => {
    const filters = listControls[0];
    const sortBy = listControls[1];
    const sortAsc = listControls[2];

    const filteredVillagers = filterData(filters);
    const sortedVillagers = sortData(filteredVillagers, sortBy, sortAsc);
    setVillagersToDisplay(sortedVillagers);
  }, [listControls]);

  return (
    <SafeAreaView style={styles.view}>
      <ListControls
        listControls={listControls}
        updateControls={updateControls}
      />
      <FlatList
        data={villagersToDisplay}
        renderItem={({item}) => <Item villager={item} />}
        keyExtractor={item => item.uniqueEntryId}
      />
    </SafeAreaView>
  );
};

export default Villagers;
