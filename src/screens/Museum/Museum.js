import React from 'react';
import {View, Button} from 'react-native';
import styles from 'styles/appStyles';

const Museum = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Button
        title="Fossils"
        onPress={() => {
          navigation.navigate('Fossils');
        }}
      />
      <Button
        title="Art"
        onPress={() => {
          navigation.navigate('Art');
        }}
      />
    </View>
  );
};

export default Museum;
