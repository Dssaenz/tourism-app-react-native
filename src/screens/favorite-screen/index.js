import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Storage from '../../libs/storage';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#bbbbbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#222222',
    textAlign: 'center',
  },
});

function FavoriteScreen() {
  const [favoriteCity, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter((key) => key.includes('favorite-'));
      const favs = await Storage.instance.multiGet(keys);

      const favorites = favs.map((item) => JSON.parse(item[1]));
      setFavorites(favorites);
    } catch (err) {
      console.log(err, 'error get favorites');
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <View style={styles.constainer}>
      {favoriteCity.map((item) => {
        console.log(item);
        return <Text>Hola</Text>;
      })}
    </View>
  );
}

export default FavoriteScreen;
