import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const pokemonData = [
  {
    title: 'Strawberry Cake 🍓', color: 'black', textColor: 'pink',
    data: [
      {
        name: 'Japanese Strawberry Shortcake',
        cardImage: require('./img/Strawberrycake1.jpg'),
        price: '$43.99',
      },
      {
        name: 'Hokkaido Strawberry Shortcake',
        cardImage: require('./img/Strawberrycake2.jpg'),
        price: '$46.99',
      },
      {
        name: 'Classic Strawberry Cake',
        cardImage: require('./img/Strawberrycake3.webp'),
        price: '$23.99',
      },
      {
        name: 'Strawberry Cream Cake',
        cardImage: require('./img/Strawberrycake5.jpg'),
        price: '$27.99',
      },
    ],
  },
  {
    title: 'Chocalate Cake 🍫', color: 'brown', textColor: 'white',
    data: [
      {
        name: 'Rich Chocolate Cake',
        cardImage: require('./img/Chocolatecake1.jpg'),
        price: '$48.99',
      },
      {
        name: 'Chocolate Chocolate Cake',
        cardImage: require('./img/Chocolatecake2.webp'),
        price: '$54.99',
      },
      {
        name: 'Chocolate Party Cake',
        cardImage: require('./img/Chocolatecake3.jpg'),
        price: '$33.99',
      },
      {
        name: 'Fruit Chocolate Cake',
        cardImage: require('./img/Chocolatecake4.jpg'),
        price: '$25.99',
      },
    ],
  },
  {
    title: 'Vanilla Cake 🍦', color: 'white', textColor: 'black',
    data: [
      {
        name: 'Premium Vanilla Cake',
        cardImage: require('./img/Vanillacake1.jpg'),
        price: '$41.99',
      },
      {
        name: 'Deluxe Vanilla Cake',
        cardImage: require('./img/Vanillacake2.jpg'),
        price: '$63.99',
      },
      {
        name: 'Vanilla Jewelery Cake',
        cardImage: require('./img/Vanillacake3.jpg'),
        price: '$67.99',
      },
      {
        name: 'Vanilla Party Cake',
        cardImage: require('./img/Vanillacake4.jpg'),
        price: '$25.99',
      },
    ],
  },
  {
    title: 'Ice Cream Cake 🍨  ', color: 'orange', textColor: 'black',
    data: [
      {
        name: 'Trio Flavor Ice Cream Cake',
        cardImage: require('./img/ICcake1.jpg'),
        price: '$61.99',
      },
      {
        name: 'Oreo Ice Cream Cake',
        cardImage: require('./img/ICcake2.jpg'),
        price: '$63.99',
      },
      {
        name: 'Melting Ice Cream Cake',
        cardImage: require('./img/ICcake3.jpg'),
        price: '$57.99',
      },
      {
        name: 'Fun Party Ice Cream Cake',
        cardImage: require('./img/Iccake4.jpg'),
        price: '$76.99',
      },
    ],
  },

];


const renderPokemon = ({ item }) => (
    <TouchableOpacity style={styles.cardItem}>
      <View style={styles.textContainer}>
        <Text style={styles.pokemonName}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <Image
          source={typeof item.cardImage === 'string' ? { uri: item.cardImage } : item.cardImage}
          style={styles.cardImage}
      />
    </TouchableOpacity>
);

function App() {  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button style={styles.button} color = "pink" title="Add Cakes"/>
      <SectionList
          sections={pokemonData}
          keyExtractor={(item, index) => item.name + index}
          renderItem={renderPokemon}
          renderSectionHeader={({ section }) => (
              <View style={[styles.header, { backgroundColor: section.color }]}>
                <Text style={[styles.headerText, { color: section.textColor || '#333' }]}>
                  {section.title}
                </Text></View>
          )}
      />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'lightyellow',
    borderWidth: 1,
  },

  header: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'lightgray',
    marginHorizontal: 10,
    borderWidth: 1,
  },

  pokemonName: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },

  cardImage: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
});

export default App;
