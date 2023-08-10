import React from 'react';
import axios from 'axios';
import SearchComponent from './SearchComponent';

const SearchScreen = ({ navigation }) => {
  const handleSearch = (query) => {
    // Define the API endpoint
    const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${query}`;

    // Make an HTTP GET request to the API using axios
    axios.get(apiUrl)
      .then((response) => {
        // Extract the cards from the response
        const fetchedCards = response.data.cards;

        // Navigate to the CardListScreen with the results
        navigation.navigate('CardList', { cards: fetchedCards });
      })
      .catch((error) => {
        console.error('An error occurred while fetching the cards:', error);
        // Handle the error as needed
      });
  };

  return <SearchComponent onSearch={handleSearch} />;
};

export default SearchScreen;
