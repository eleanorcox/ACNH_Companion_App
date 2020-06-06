import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FONT_FAMILY, FONT_SIZE_16, FONT_WEIGHT_BOLD} from 'assets/fonts';
import {WHITE} from 'assets/colours';

const NoResults = ({numFilters, type}) => {
  return (
    <View>
      <Text style={styles.text}>No {type} found!</Text>
      {numFilters === 1 && (
        <Text style={styles.text}>
          You currently have {numFilters} filter applied, try removing this
        </Text>
      )}
      {numFilters > 1 && (
        <Text style={styles.text}>
          You currently have {numFilters} filters applied, try removing these
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_16,
    fontWeight: FONT_WEIGHT_BOLD,
    color: WHITE,
    textAlign: 'center',
  },
});

export default NoResults;
