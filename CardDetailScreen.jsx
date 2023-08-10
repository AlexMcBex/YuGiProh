import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CardDetailComponent from './CardDetailComponent';

const CardDetailScreen = ({ route }) => {
  const { card } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <CardDetailComponent card={card} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default CardDetailScreen;
