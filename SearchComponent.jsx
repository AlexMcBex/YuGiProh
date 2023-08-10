import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <View>
      <TextInput
        value={query}
        onChangeText={text => setQuery(text)}
        placeholder="Search Yu-Gi-Oh! cards"
      />
      <Button title="Search" onPress={() => onSearch(query)} />
    </View>
  );
};

export default SearchComponent;
