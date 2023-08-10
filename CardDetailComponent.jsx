import React from 'react';
import { View, Text, Image } from 'react-native';

const CardDetailComponent = ({ card }) => {
  return (
    <View>
      <Text>{card.name}</Text>
      <Image source={{ uri: card.image_url }} />
      <Text>{card.description}</Text>
      {/* Add other details as needed */}
    </View>
  );
};

export default CardDetailComponent;
