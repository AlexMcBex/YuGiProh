import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import CardListComponent from './CardListComponent';

const CardListScreen = ({ route, navigation }) => {
  const { cards } = route.params;

  const handleSelectCard = (card) => {
    navigation.navigate('CardDetail', { card });
  };

  return (
    <View>
      {cards ? (
        <CardListComponent cards={cards} onSelectCard={handleSelectCard} />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

export default CardListScreen;
