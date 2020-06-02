import React, {useState} from 'react';
import {View, Text, TextInput, Image, Modal, Button} from 'react-native';
import {Picker} from '@react-native-community/picker';

import {totalRecipes, totalFish, totalBugs} from './progressTotals';

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

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const playerName = useSelector(state => state.profile.playerName);
  const islandName = useSelector(state => state.profile.islandName);
  const nativeFruit = useSelector(state => state.profile.nativeFruit);
  const hemisphere = useSelector(state => state.profile.hemisphere);
  const friendCode = useSelector(state => state.profile.friendCode);

  const residents = useSelector(state => state.villagers.residents);
  const caughtBugs = useSelector(state => state.bugs.caughtBugs);
  const caughtFish = useSelector(state => state.fish.caughtFish);
  const learnedRecipes = useSelector(state => state.recipes.learnedRecipes);

  const [modalVisible, setModalVisible] = useState(false);
  const [name, updateName] = useState('');
  const [island, updateIsland] = useState('');
  const [fruit, updateFruit] = useState('Apple');
  const [hemi, updateHemi] = useState('northern');
  const [code, updateCode] = useState('');

  const currentMonth = new Date().getMonth(); //TODO: state

  const toggleModal = visible => {
    setModalVisible(visible);
  };

  const formatCode = code => {
    let formatted = code;
    formatted = formatted.replace(/-/g, '');
    if (code.length > 0) {
      const chunks = code.match(/.{1,4}/g);
      formatted = chunks.toString().replace(/,/g, '-');
    }
    return formatted;
  };

  return (
    <View style={styles.view}>
      <Text>Name: {playerName}</Text>
      <Text>Island: {islandName}</Text>
      <Text>Native Fruit: {nativeFruit}</Text>
      <Text>
        Hemisphere: {hemisphere[0].toUpperCase() + hemisphere.substring(1)}
      </Text>
      <Text>Friend Code: SW-{friendCode}</Text>
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
        <Text>Progress</Text>
        <Text>
          Bugs: {caughtBugs.length}/{totalBugs}
        </Text>
        <Text>
          Fish: {caughtFish.length}/{totalFish}
        </Text>
        <Text>
          Recipes: {learnedRecipes.length}/{totalRecipes}
        </Text>
      </View>
      <Button
        title={'Change'}
        onPress={() => {
          toggleModal(true);
        }}
      />
      <Modal animationType={'slide'} transparent={false} visible={modalVisible}>
        <View>
          <Text>Change Name</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => updateName(text)}
            value={name}
          />
        </View>
        <View>
          <Text>Change Island Name</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => updateIsland(text)}
            value={island}
          />
        </View>
        <View>
          <Text>Change Native Fruit</Text>
          <Picker
            selectedValue={fruit}
            style={{height: 50, width: 150}}
            onValueChange={value => updateFruit(value)}>
            <Picker.Item label="Apple" value="Apple" />
            <Picker.Item label="Cherry" value="Cherry" />
            <Picker.Item label="Orange" value="Orange" />
            <Picker.Item label="Peach" value="Peach" />
            <Picker.Item label="Pear" value="Pear" />
          </Picker>
        </View>
        <View>
          <Text>Change Hemisphere</Text>
          <Picker
            selectedValue={hemi}
            style={{height: 50, width: 150}}
            onValueChange={value => updateHemi(value)}>
            <Picker.Item label="Northern" value="northern" />
            <Picker.Item label="Southern" value="southern" />
          </Picker>
        </View>
        <View>
          <Text>Change Friend Code</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => {
              text = text.replace(/-/g, '');
              updateCode(text);
            }}
            keyboardType="number-pad"
            maxLength={14}
            value={formatCode(code)}
          />
        </View>
        <Button
          title={'Save'}
          onPress={() => {
            if (name !== '') {
              dispatch(updatePlayerName(name));
            }
            if (island !== '') {
              dispatch(updateIslandName(island));
            }
            if (fruit !== nativeFruit) {
              dispatch(updateNativeFruit(fruit));
            }
            if (hemi !== hemisphere) {
              dispatch(updateHemisphere(hemi));
            }
            if (code !== '') {
              dispatch(updateFriendCode(formatCode(code)));
            }
            toggleModal(false);
          }}
        />
      </Modal>
    </View>
  );
};

export default Profile;
