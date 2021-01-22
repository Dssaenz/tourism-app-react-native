/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  modal: {
    width: '100%',
    height: '40%',
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingLeft: 35,
    paddingRight: 100,
    paddingTop: 30,
  },
  location: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: '900',
    textTransform: 'uppercase',
    position: 'absolute',
    bottom: 150,
    left: 30,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  available: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

function DetailCountry({ navigation, route }) {
  const { item } = route.params;
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={{ width: '100%', height: '100%', position: 'relative' }}>
        <View style={{ width: '100%', height: '70%', position: 'absolute', top: 0 }}>
          <Icon
            name="arrow-back"
            size={34}
            color="#FFF"
            style={{ position: 'absolute', top: 30, left: 25, zIndex: 100 }}
            onPress={() => navigation.goBack()}
          />
          <Icon
            name="ios-share-outline"
            size={31}
            color="#FFF"
            style={{ position: 'absolute', top: 30, right: 25, zIndex: 100 }}
            onPress={() => navigation.goBack()}
          />
          <Image
            source={{ uri: item.image }}
            style={[StyleSheet.absoluteFillObject, { resizeMode: 'cover' }]}
          />
          <Text style={[styled.location]}>{item.location}</Text>
        </View>
        <View style={styled.modal}>
          <Text style={styled.description}>{item.description}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 18 }}>
            <Text style={{ color: '#898b8f', fontSize: 16, marginRight: 5 }}>Available:</Text>
            <Text style={styled.available}>{item.available}</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#898b8f', fontSize: 16, marginRight: 5 }}>Duration:</Text>
              <Text style={styled.available}>{item.duration} hours</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
              <Text style={{ color: '#898b8f', fontSize: 16, marginRight: 5 }}>Price:</Text>
              <Text style={styled.available}>{item.price} $</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

DetailCountry.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default DetailCountry;
