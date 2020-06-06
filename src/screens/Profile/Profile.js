import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import {
  totalRecipes,
  totalFish,
  totalBugs,
  totalArt,
  totalFossils,
} from './progressTotals';

import styles from 'styles/profileStyles';

import {useSelector, useDispatch} from 'react-redux';
import {
  updatePlayerName,
  updateIslandName,
  updateNativeFruit,
  updateHemisphere,
  updateFriendCode,
} from '../../redux/profileReducer';

const items = require('@nooksbazaar/acdb/items.json');
const other = items.filter(item => item.sourceSheet === 'Other');
for (let i = 0; i < other.length; i++) {
  let name = other[i].name;
  name = name[0].toUpperCase() + name.substring(1);
  other[i].name = name;
}
const fruits = other.filter(item => {
  return (
    item.name === 'Apple' ||
    item.name === 'Cherry' ||
    item.name === 'Orange' ||
    item.name === 'Peach' ||
    item.name === 'Pear'
  );
});
const fruitImages = {};
for (let i = 0; i < fruits.length; i++) {
  fruitImages[fruits[i].name] = fruits[i].variants[0].inventoryImage;
}

const DisplayResidents = ({residents}) => {
  if (residents.length === 0) {
    return <Text>Try adding some residents in the Villagers section!</Text>;
  }
  const residentsImages = residents.map(resident => {
    return (
      <Image source={{uri: resident.iconImage}} style={styles.residentIcon} />
    );
  });

  return <View style={styles.residentsContainer}>{residentsImages}</View>;
};

const DisplayBirthdays = ({residents, currentMonth}) => {
  const birthdays = residents.map(resident => {
    let birthday = resident.birthday;
    birthday = birthday.split('/');
    const birthdayMonth = Number(birthday[0]) - 1;
    if (birthdayMonth === currentMonth) {
      return (
        <View style={styles.birthdayRowContainer}>
          <View style={styles.name}>
            <Text style={styles.textWhite}>{resident.name}</Text>
          </View>
          <View style={styles.birthday}>
            <Text style={styles.textDarkGrey}>{resident.birthday}</Text>
          </View>
        </View>
      );
    }
  });
  if (birthdays[0] === undefined) {
    return <Text>No birthdays this month!</Text>;
  } else {
    return birthdays;
  }
};

const ProgressRow = ({title, completed, total}) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.progressLeft}>
        <Text style={styles.textWhite}>{title}</Text>
      </View>
      <View style={styles.progressMid}>
        <Text style={styles.textDarkGrey}>
          {completed}/{total}
        </Text>
      </View>
      {/* <View style={styles.progressRight}>
      <Text>Progress Bar</Text>
    </View> */}
    </View>
  );
};

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const playerName = useSelector(state => state.profile.playerName);
  const islandName = useSelector(state => state.profile.islandName);
  const nativeFruit = useSelector(state => state.profile.nativeFruit);
  const hemisphere = useSelector(state => state.profile.hemisphere);
  const friendCode = useSelector(state => state.profile.friendCode);

  const residents = useSelector(state => state.villagers.residents);
  const donatedBugs = useSelector(state => state.bugs.donatedBugs);
  const donatedFish = useSelector(state => state.fish.donatedFish);
  const learnedRecipes = useSelector(state => state.recipes.learnedRecipes);
  const donatedFossils = useSelector(state => state.museum.donatedFossils);
  const donatedArt = useSelector(state => state.museum.donatedArt);

  const currentMonth = new Date().getMonth(); //TODO: state

  const formatCode = text => {
    let formatted = text;
    formatted = formatted.replace(/-/g, '');
    if (text.length > 0) {
      const chunks = text.match(/.{1,4}/g);
      formatted = chunks.toString().replace(/,/g, '-');
    }
    return formatted;
  };

  const nativeFruitImage = fruitImages[nativeFruit];
  const hemisphereImage =
    hemisphere === 'northern'
      ? require('assets/images/northernHemisphere219x219.png')
      : require('assets/images/southernHemisphere219x219.png');

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView
        style={styles.scrollView}
        // contentContainerStyle={styles.scrollViewContent}
      >
        {/* Passport */}
        <View style={styles.card}>
          <Text style={styles.title}>Passport</Text>
          {/* Name */}
          <TextInput
            style={styles.input}
            onChangeText={text => {
              dispatch(updatePlayerName(text));
            }}
            value={playerName}
          />

          {/* Island Name */}
          <TextInput
            style={styles.input}
            onChangeText={text => {
              dispatch(updateIslandName(text));
            }}
            maxLength={10}
            value={islandName}
          />

          {/* Native Fruit */}
          {/* TODO: Styling of picker items does not allow you to change fontFamily.
          Figure out workaround for this */}
          <View style={styles.rowContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.textWhite}>Native Fruit</Text>
            </View>
            <View style={styles.rightContainer}>
              <Image
                source={{uri: nativeFruitImage}}
                style={styles.pickerImage}
              />
              <View style={styles.rightInput}>
                <Picker
                  selectedValue={nativeFruit}
                  mode={'dropdown'}
                  style={styles.textDarkGrey}
                  onValueChange={value => {
                    dispatch(updateNativeFruit(value));
                  }}>
                  <Picker.Item label="Apple" value="Apple" />
                  <Picker.Item label="Cherry" value="Cherry" />
                  <Picker.Item label="Orange" value="Orange" />
                  <Picker.Item label="Peach" value="Peach" />
                  <Picker.Item label="Pear" value="Pear" />
                </Picker>
              </View>
            </View>
          </View>

          {/* Hemisphere */}
          <View style={styles.rowContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.textWhite}>Hemisphere</Text>
            </View>
            <View style={styles.rightContainer}>
              <Image source={hemisphereImage} style={styles.pickerImage} />
              <View style={styles.rightInput}>
                <Picker
                  selectedValue={hemisphere}
                  style={styles.textDarkGrey}
                  mode={'dropdown'}
                  onValueChange={value => {
                    dispatch(updateHemisphere(value));
                  }}>
                  <Picker.Item label="Northern" value="northern" />
                  <Picker.Item label="Southern" value="southern" />
                </Picker>
              </View>
            </View>
          </View>

          {/* Friend Code */}
          <View style={styles.rowContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.textWhite}>Switch Code </Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.switchCodeSW}>SW-</Text>
              <TextInput
                style={styles.rightInput}
                onChangeText={text => {
                  text = text.replace(/-/g, '');
                  const formatted = formatCode(text);
                  dispatch(updateFriendCode(formatted));
                }}
                keyboardType="number-pad"
                maxLength={14}
                value={friendCode}
              />
            </View>
          </View>
        </View>

        {/* Residents */}
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>Residents</Text>
            <DisplayResidents residents={residents} />
          </View>
          {residents.length > 0 && (
            <View>
              <Text style={styles.title16}>Upcoming Birthdays</Text>
              <DisplayBirthdays
                residents={residents}
                currentMonth={currentMonth}
              />
            </View>
          )}
        </View>

        {/* Progress */}
        <View style={styles.card}>
          <Text style={styles.title}>Museum Progress</Text>
          <ProgressRow
            title="Bugs"
            completed={donatedBugs.length}
            total={totalBugs}
          />
          <ProgressRow
            title="Fish"
            completed={donatedFish.length}
            total={totalFish}
          />
          <ProgressRow
            title="Fossils"
            completed={donatedFossils.length}
            total={totalFossils}
          />
          <ProgressRow
            title="Art"
            completed={donatedArt.length}
            total={totalArt}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Collections Progress</Text>
          <ProgressRow
            title="Recipes"
            completed={learnedRecipes.length}
            total={totalRecipes}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
