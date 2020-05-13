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
  const [filters, setFilters] = useState([]);
  const [villagersToDisplay, setVillagersToDisplay] = useState(villagers);

  const handleChangeFilter = filter => {
    const updatedFilters = updateFilters(filters, filter);
    setFilters(updatedFilters);
  };

  useEffect(() => {
    setVillagersToDisplay(filterData(filters));
  }, [filters]);

  return (
    <SafeAreaView style={styles.view}>
      <FilterButtons filters={filters} changeFilter={handleChangeFilter} />
      <FlatList
        data={villagersToDisplay}
        renderItem={({item}) => <Item villager={item} />}
        keyExtractor={item => item.uniqueEntryId}
      />
    </SafeAreaView>
  );
};
export default Villagers;
