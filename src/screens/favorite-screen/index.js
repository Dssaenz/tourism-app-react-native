import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Storage from '../../libs/storage';
import { FavoriteCard } from '../../components';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#F6F7FD',
    alignItems: 'center',
    paddingBottom: 40,
  },
  titleSection: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: '6%',
    marginVertical: '4%',
  },
  text: {
    fontSize: 18,
    color: '#222222',
    textAlign: 'center',
  },
});

function FavoriteScreen({ navigation }) {
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
    const unsubscribe = navigation.addListener('focus', () => {
      getFavorites();
    });
    return unsubscribe;
  }, [navigation]);

  if (favoriteCity.length === 0) {
    return (
      <View style={styles.constainer}>
        <Text>Not favorites added</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#F6F7FD' }}>
      <ScrollView>
        <Text style={styles.titleSection}>Favorites</Text>
        <View style={styles.constainer}>
          {favoriteCity.map((item) => {
            console.log(item);
            return <FavoriteCard favoriteImage={item.image} name={item.location} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

FavoriteScreen.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};

export default FavoriteScreen;
