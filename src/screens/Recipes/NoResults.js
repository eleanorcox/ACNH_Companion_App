import React from 'react';
import {View, Text} from 'react-native';

export const NoResults = numFilters => {
  return (
    <View>
      <Text>No recipes found!</Text>
      {numFilters === 1 && (
        <Text>
          You currently have {numFilters} filter applied, try removing this!
        </Text>
      )}
      {numFilters > 1 && (
        <Text>
          You currently have {numFilters} filters applied, try removing these!
        </Text>
      )}
    </View>
  );
};
