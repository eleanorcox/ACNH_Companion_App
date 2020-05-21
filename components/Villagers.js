import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addResident,
  removeResident,
  addFavouriteVillager,
  removeFavouriteVillager,
} from '../reducer';

const allVillagers = require('@nooksbazaar/acdb/villagers.json');
import styles from '../stylesheets/VillagersStyles';

/* Filtering */

const FilterButtons = ({changeFilter, currentFilters}) => {
  const genderFilters = ['Female', 'Male'];
  const speciesFilters = [
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
  const personalityFilters = [
    'Big Sister',
    'Cranky',
    'Jock',
    'Lazy',
    'Normal',
    'Peppy',
    'Smug',
    'Snooty',
  ];

  let currentGenderFilters = [];
  let currentSpeciesFilters = [];
  let currentPersonalityFilters = [];

  for (let i = 0; i < currentFilters.length; i++) {
    const filterType = currentFilters[i][0];
    if (filterType === 'gender') {
      currentGenderFilters.push(currentFilters[i][1]);
    } else if (filterType === 'species') {
      currentSpeciesFilters.push(currentFilters[i][1]);
    } else if (filterType === 'personality') {
      currentPersonalityFilters.push(currentFilters[i][1]);
    }
  }

  let genderButtons = genderFilters.map(filter => {
    const pressed = currentGenderFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['gender', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let speciesButtons = speciesFilters.map(filter => {
    const pressed = currentSpeciesFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['species', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  let personalityButtons = personalityFilters.map(filter => {
    const pressed = currentPersonalityFilters.includes(filter);
    return (
      <TouchableOpacity
        onPress={() => {
          changeFilter(['personality', filter]);
        }}
        style={pressed ? styles.buttonPressed : styles.buttonUnpressed}>
        <Text>{filter}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <View style={styles.buttons}>{genderButtons}</View>
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

const filterData = (listToFilter, filters) => {
  let filteredVillagers = listToFilter;
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

const SortButtons = ({changeSort, currentSortBy, currentSortAsc}) => {
  // eslint-disable-next-line prettier/prettier
  const sortByOptions = ['Name', 'Species', 'Gender', 'Personality', 'Birthday', 'Favourites'];

  return (
    <View style={styles.buttons}>
      {sortByOptions.map(sortByOpt => {
        return (
          <TouchableOpacity
            onPress={() => {
              changeSort(sortByOpt);
            }}
            style={
              sortByOpt === currentSortBy
                ? styles.buttonPressed
                : styles.buttonUnpressed
            }>
            <Text>{sortByOpt}</Text>
            {sortByOpt === currentSortBy && (
              <Icon
                name={currentSortAsc === 1 ? 'expand-more' : 'expand-less'}
              />
            )}
          </TouchableOpacity>
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

const sortData = (villagerList, sortBy, asc, favourites) => {
  let villagerListCopy = [...villagerList];
  const favouritesCopy = [...favourites];

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
  } else if (sortBy === 'Favourites') {
    favouritesCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });

    // Remove favourites from villagerListCopy
    for (let i = 0; i < favouritesCopy.length; i++) {
      const index = villagerListCopy.indexOf(favouritesCopy[i]);
      villagerListCopy.splice(index, 1);
    }

    villagerListCopy.sort((a, b) => {
      return a.name > b.name ? asc : -asc;
    });
    favouritesCopy.push(...villagerListCopy);
    villagerListCopy = favouritesCopy;
  }

  return villagerListCopy;
};

/* ListControls */
const ListControls = ({listControls, updateControls}) => {
  const [query, setQuery] = useState('');

  const handleChangeFilter = newFilter => {
    const updatedFilters = updateFilters(listControls.filters, newFilter);
    const newControls = {
      filters: updatedFilters,
      sortBy: listControls.sortBy,
      sortAsc: listControls.sortAsc,
      searchQuery: listControls.searchQuery,
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
      searchQuery: listControls.searchQuery,
    };
    updateControls(newControls);
  };

  const searchFilterFunction = text => {
    setQuery(text);
    const newControls = {
      filters: listControls.filters,
      sortBy: listControls.sortBy,
      sortAsc: listControls.sortAsc,
      searchQuery: text,
    };
    updateControls(newControls);
  };

  return (
    <View style={styles.listControls}>
      <FilterButtons
        changeFilter={handleChangeFilter}
        currentFilters={listControls.filters}
      />
      <SortButtons
        changeSort={handleChangeSort}
        currentSortBy={listControls.sortBy}
        currentSortAsc={listControls.sortAsc}
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
    </View>
  );
};

/* FlatList */

const Item = ({villager}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = visible => {
    setModalVisible(visible);
  };
  const dispatch = useDispatch();
  const residents = useSelector(state => state.residents);
  const favourites = useSelector(state => state.favouriteVillagers);

  return (
    <View style={styles.villager}>
      <Text>Name: {villager.name}</Text>
      <Image source={{uri: villager.iconImage}} style={styles.image} />
      <Text>Species: {villager.species}</Text>
      <Text>Gender: {villager.gender}</Text>
      <Text>Personality: {villager.personality}</Text>
      <Text>Birthday: {villager.birthday}</Text>

      <View style={styles.buttons}>
        <Icon
          name={favourites.includes(villager) ? 'star' : 'star-border'}
          size={30}
          onPress={() => {
            favourites.includes(villager)
              ? dispatch(removeFavouriteVillager(villager))
              : dispatch(addFavouriteVillager(villager));
          }}
        />
        <Icon
          name="home"
          size={30}
          onPress={() => {
            residents.includes(villager)
              ? dispatch(removeResident(villager))
              : dispatch(addResident(villager));
          }}
        />
        <Icon
          name="more-horiz"
          size={30}
          onPress={() => {
            toggleModal(true);
          }}
        />
      </View>

      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.itemModalContent}>
          <View style={styles.itemView}>
            <Button
              title={'Close'}
              onPress={() => {
                toggleModal(false);
              }}
            />
            <Text>Catchphrase: {villager.catchphrase}</Text>
            <Text>
              Favourite Colours: {villager.colors[0]}, {villager.colors[1]}
            </Text>
            <Text>
              Favourite Styles: {villager.styles[0]}, {villager.styles[1]}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const Villagers = ({navigation}) => {
  console.log('villagers');
  // listControls is an object with the following key-value pairs:
  // > filters: an array of filter arrays, e.g. [['gender', 'Female], ['species', 'Bear']]
  // > sortBy: a string indicating the sorting option e.g. 'Name' or 'Personality'
  // > sortAsc: a number indicating whether to sort in ascending or descending order, where ascending = 1 and descending = -1
  // > searchQuery: a string representing the text typed into the search bar
  const [listControls, setListControls] = useState({
    filters: [],
    sortBy: 'Name',
    sortAsc: 1,
    searchQuery: '',
  });
  const [villagersToDisplay, setVillagersToDisplay] = useState(allVillagers);
  const [modalVisible, setModalVisible] = useState(false);
  const favourites = useSelector(state => state.favouriteVillagers);

  const updateControls = newListControls => {
    setListControls(newListControls);
  };

  useEffect(() => {
    let filteredVillagers;

    if (listControls.searchQuery !== '') {
      const query = listControls.searchQuery.toUpperCase();

      const searchResults = allVillagers.filter(villager => {
        const villagerData = villager.name.toUpperCase();
        return villagerData.includes(query);
      });

      filteredVillagers = filterData(searchResults, listControls.filters);
    } else {
      filteredVillagers = filterData(allVillagers, listControls.filters);
    }

    // const favourites = useSelector(state => state.favouriteVillagers);
    const sortedVillagers = sortData(
      filteredVillagers,
      listControls.sortBy,
      listControls.sortAsc,
      favourites,
    );
    setVillagersToDisplay(sortedVillagers);
  }, [listControls, favourites]);

  const toggleModal = visible => {
    setModalVisible(visible);
  };

  const noVillagers = () => {
    const numFilters = listControls.filters.length;

    return (
      <View>
        <Text>No villagers found!</Text>
        {numFilters === 1 && (
          <Text>
            You currently have {numFilters} filter applied, try removing this!
          </Text>
        )}
        {numFilters > 1 && (
          <Text>
            You currently have {numFilters} filters applied, try removing these!
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.view}>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
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
        data={villagersToDisplay}
        renderItem={({item}) => <Item villager={item} />}
        keyExtractor={item => item.name}
        ListEmptyComponent={noVillagers}
      />
    </View>
  );
};

export default Villagers;
