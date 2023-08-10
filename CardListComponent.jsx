import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

const CardListComponent = ({ cards, onSelectCard }) => {
  return (
    <View>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectCard(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CardListComponent;
