import React from 'react';
import {View, Text} from 'react-native';

const NoResults = ({numFilters, type}) => {
  return (
    <View>
      <Text>No {type} found!</Text>
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

export default NoResults;
