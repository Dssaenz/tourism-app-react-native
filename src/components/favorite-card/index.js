/* eslint-disable import/no-named-default */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { default as MaterialIcons } from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  constainer: {
    width: '90%',
    height: 135,
    marginBottom: 25,
    zIndex: 20,
    borderRadius: 20,
    position: 'relative',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  section: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 25,
  },
});

function FavoriteCard({ favoriteImage, name }) {
  return (
    <TouchableOpacity style={styles.constainer}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 25,
        }}
        source={{ uri: favoriteImage }}
      />
      <View style={styles.section}>
        <Text style={styles.text}>{name}</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={32}
          color="#FFF"
          style={{ position: 'absolute', bottom: 30, right: 25, zIndex: 100 }}
        />
      </View>
    </TouchableOpacity>
  );
}

FavoriteCard.propTypes = {
  favoriteImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FavoriteCard;
