import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from 'styles/VillagersStyles';

const SortButtons = ({
  sortOptions,
  changeSort,
  currentSortBy,
  currentSortAsc,
}) => {
  return (
    <View style={styles.buttons}>
      {sortOptions.map(sortByOpt => {
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

export default SortButtons;
