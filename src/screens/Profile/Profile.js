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

import styles from 'styles/AppStyles';

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
      <ScrollView style={styles.scrollView}>
        {/* Name */}
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => {
            dispatch(updatePlayerName(text));
          }}
          value={playerName}
        />
        {/* Island Name */}
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => {
            dispatch(updateIslandName(text));
          }}
          maxLength={10}
          value={islandName}
        />
        {/* Native Fruit */}
        <Image source={{uri: nativeFruitImage}} style={styles.image} />
        <Picker
          selectedValue={nativeFruit}
          style={{height: 50, width: 150}}
          onValueChange={value => {
            dispatch(updateNativeFruit(value));
          }}>
          <Picker.Item label="Apple" value="Apple" />
          <Picker.Item label="Cherry" value="Cherry" />
          <Picker.Item label="Orange" value="Orange" />
          <Picker.Item label="Peach" value="Peach" />
          <Picker.Item label="Pear" value="Pear" />
        </Picker>
        {/* Hemisphere */}
        <Image source={hemisphereImage} style={styles.image} />
        <Picker
          selectedValue={hemisphere}
          style={{height: 50, width: 150}}
          onValueChange={value => {
            dispatch(updateHemisphere(value));
          }}>
          <Picker.Item label="Northern" value="northern" />
          <Picker.Item label="Southern" value="southern" />
        </Picker>
        <View>
          <Text>Friend Code: SW-</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
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
        <View>
          <Text>Residents</Text>
          {residents.map(resident => {
            return (
              <Image source={{uri: resident.iconImage}} style={styles.image} />
            );
          })}
        </View>
        <View>
          <Text>Upcoming Birthdays</Text>
          {residents.map(resident => {
            let birthday = resident.birthday;
            birthday = birthday.split('/');
            const birthdayMonth = Number(birthday[0]) - 1;
            if (birthdayMonth === currentMonth) {
              return (
                <Text>
                  {resident.name} {resident.birthday}
                </Text>
              );
            }
          })}
        </View>
        <View>
          <Text>Museum Progress</Text>
          <Text>
            Bugs: {donatedBugs.length}/{totalBugs}
          </Text>
          <Text>
            Fish: {donatedFish.length}/{totalFish}
          </Text>
          <Text>
            Fossils: {donatedFossils.length}/{totalFossils}
          </Text>
          <Text>
            Art: {donatedArt.length}/{totalArt}
          </Text>
        </View>
        <View>
          <Text>Collections Progress</Text>
          <Text>
            Recipes: {learnedRecipes.length}/{totalRecipes}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
