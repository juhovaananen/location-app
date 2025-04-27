import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

const CountriesAndCapitalsScreen = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View>
      <TextInput
        placeholder="Search for a country"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredCountries}
        keyExtractor={item => item.cca3}
        renderItem={({ item }) => (
          <Text>{item.name.common} - {item.capital}</Text>
        )}
      />
    </View>
  );
};

export default CountriesAndCapitalsScreen;