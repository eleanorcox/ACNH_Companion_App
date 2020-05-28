import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from 'styles/VillagersStyles';

export const SortButtons = ({changeSort, currentSortBy, currentSortAsc}) => {
  const sortByOptions = ['Name', 'Critterpedia', 'Price', 'Caught', 'Donated'];

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
