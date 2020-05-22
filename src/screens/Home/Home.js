import React from 'react';
import {View, Button} from 'react-native';
import styles from 'styles/AppStyles';

const Home = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      <Button
        title="Villagers"
        onPress={() => {
          navigation.navigate('Villagers');
        }}
      />
      <Button
        title="Collectibles"
        onPress={() => {
          navigation.navigate('Collectibles');
        }}
      />
      <Button
        title="Recipes"
        onPress={() => {
          navigation.navigate('Recipes');
        }}
      />
      <Button
        title="Furniture"
        onPress={() => {
          navigation.navigate('Furniture');
        }}
      />
      <Button
        title="Calendar"
        onPress={() => {
          navigation.navigate('Calendar');
        }}
      />
      <Button
        title="Guides"
        onPress={() => {
          navigation.navigate('Guides');
        }}
      />
    </View>
  );
};

export default Home;
