import React from 'react';
import { View, Text, FlatList } from 'react-native';

const countries = [
  { name: 'France', capital: 'Paris' },
  { name: 'Japan', capital: 'Tokyo' },
  { name: 'India', capital: 'New Delhi' },
];

const CountriesAndCapitalsScreen = () => {
  return (
    <View>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text>{item.name} - Capital: {item.capital}</Text>
        )}
      />
    </View>
  );
};

export default CountriesAndCapitalsScreen;
