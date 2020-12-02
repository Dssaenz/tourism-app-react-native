/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { tuturial2Specc, SPACING } from '@utils/dimentions';

const { ITEM_WIDTH } = tuturial2Specc;

const styled = StyleSheet.create({
  constainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#222222',
    textAlign: 'center',
  },
  location: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: '800',
    width: ITEM_WIDTH * 0.8,
    textTransform: 'uppercase',
    position: 'absolute',
    top: 60,
    left: SPACING * 2,
  },
});

function DetailCountry({ navigation, route }) {
  const { item } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Icon
        name="arrow-back"
        size={24}
        color="#FFF"
        style={{ paddingHorizontal: SPACING, position: 'absolute', top: 25, left: 10, zIndex: 2 }}
        onPress={() => navigation.goBack()}
      />
      <View style={[StyleSheet.absoluteFillObject]}>
        <Image
          source={{ uri: item.image }}
          style={[StyleSheet.absoluteFillObject, { resizeMode: 'cover' }]}
        />
      </View>
      <Text style={[styled.location]}>{item.location}</Text>
    </View>
  );
}

DetailCountry.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default DetailCountry;
