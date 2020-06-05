import React from 'react';
import {View, Button} from 'react-native';
import styles from 'styles/crittersStyles';

const Critters = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Button
        title="Bugs"
        onPress={() => {
          navigation.navigate('Bugs');
        }}
      />
      <Button
        title="Fish"
        onPress={() => {
          navigation.navigate('Fish');
        }}
      />
    </View>
  );
};

export default Critters;
