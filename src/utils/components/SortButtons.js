import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
import {BEIGE_LIGHT, BEIGE_DARK, WHITE, GRAY_DARKER} from 'assets/colours';
import {FONT_FAMILY, FONT_SIZE_16, FONT_WEIGHT_BOLD} from 'assets/fonts';

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
            <View style={styles.buttons}>
              <Text
                style={
                  sortByOpt === currentSortBy
                    ? styles.textPressed
                    : styles.textUnpressed
                }>
                {sortByOpt}
              </Text>
              <Text> </Text>
              {sortByOpt === currentSortBy && (
                <Icon
                  size={20}
                  name={currentSortAsc === 1 ? 'expand-more' : 'expand-less'}
                />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  buttonUnpressed: {
    backgroundColor: BEIGE_LIGHT,
    padding: 5,
    borderRadius: 10,
    marginVertical: 3,
    width: 100,
    alignItems: 'center',
  },

  buttonPressed: {
    backgroundColor: BEIGE_DARK,
    padding: 5,
    borderRadius: 10,
    marginVertical: 3,
    width: 100,
    alignItems: 'center',
  },

  textPressed: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_16,
    fontWeight: FONT_WEIGHT_BOLD,
    color: WHITE,
    textAlign: 'center',
  },

  textUnpressed: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_16,
    fontWeight: FONT_WEIGHT_BOLD,
    color: GRAY_DARKER,
    textAlign: 'center',
  },
});

export default SortButtons;
