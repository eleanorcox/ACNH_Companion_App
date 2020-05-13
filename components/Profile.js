import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import styles from "../stylesheets/AppStyles";

const Profile = ({navigation}) => {
  // const [value, onChangeText] = React.useState('Name Placeholder');

  return (
    <View style={styles.view}>
      <Text>Name: </Text>
      {/* <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeText(text)}
        value={value}
      /> */}
      <Text>Island: The Island</Text>
      <Text>Native Fruit: Peaches</Text>
      <Text>Friend Code: SW_XXXX_YYYY_ZZZZ</Text>
      <View>
        <Text>Residents</Text>
      </View>
    </View>
  );
};

export default Profile;
