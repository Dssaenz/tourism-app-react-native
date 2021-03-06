/* eslint-disable import/no-named-default */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Share, View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import { default as IconIons } from 'react-native-vector-icons/Ionicons';
import { default as IconAnt } from 'react-native-vector-icons/AntDesign';
import Slider from 'react-native-slider';
import Storage from '../../libs/storage';

let persons = 2;

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
    paddingRight: 35,
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
    paddingRight: 90,
  },
  available: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF',
  },
  track: {
    height: 3,
    borderRadius: 4,
    backgroundColor: '#898b8f',
  },
  thumb: {
    width: 27,
    height: 27,
    backgroundColor: '#fff',
    borderColor: '#3767EE',
    borderWidth: 7,
    borderRadius: 20,
  },
});

function DetailCountry({ navigation, route }) {
  const { item } = route.params;
  const [number, setNumber] = useState(0.2);
  const [favorite, setFavorite] = useState(false);

  if (number >= 0 && number <= 0.1) {
    persons = 1;
  } else if (number > 0.1 && number <= 0.2) {
    persons = 2;
  } else if (number > 0.2 && number <= 0.3) {
    persons = 3;
  } else if (number > 0.3 && number <= 0.4) {
    persons = 4;
  } else if (number > 0.4 && number <= 0.5) {
    persons = 5;
  } else if (number > 0.5 && number <= 0.6) {
    persons = 6;
  } else if (number > 0.6 && number <= 0.7) {
    persons = 7;
  } else if (number > 0.7 && number <= 0.8) {
    persons = 8;
  } else if (number > 0.8 && number <= 0.9) {
    persons = 9;
  } else if (number > 0.9 && number <= 1) {
    persons = 10;
  }

  const onShare = async () => {
    console.log('caos!!');
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // hola
        }
      } else if (result.action === Share.dismissedAction) {
        // hola 2
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const addFavorite = async () => {
    const place = JSON.stringify(item);
    const key = `favorite-${item.key}`;
    const stored = await Storage.instance.store(key, place);
    if (stored) {
      setFavorite(true);
    }
  };

  const removeFavorite = async () => {
    const key = `favorite-${item.key}`;
    await Storage.instance.remove(key);
    setFavorite(false);
  };

  const getFavorite = async (id) => {
    try {
      const key = `favorite-${id}`;
      const favStr = await Storage.instance.get(key);
      if (favStr != null) {
        setFavorite(true);
      }
    } catch (err) {
      console.log('error get favorite', err);
    }
  };

  const toogleFavorite = () => {
    if (favorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  useEffect(() => {
    const {
      item: { key },
    } = route.params;
    getFavorite(key);
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={{ width: '100%', height: '100%', position: 'relative' }}>
        <View style={{ width: '100%', height: '70%', position: 'absolute', top: 0 }}>
          <IconAnt
            name="arrowleft"
            size={32}
            color="#FFF"
            style={{ position: 'absolute', top: 30, left: 25, zIndex: 100 }}
            onPress={() => navigation.goBack()}
          />
          <IconIons
            name="ios-share-outline"
            size={32}
            color="#FFF"
            style={{ position: 'absolute', top: 30, right: 25, zIndex: 100 }}
            onPress={onShare}
          />
          <Image
            source={{ uri: item.image }}
            style={[StyleSheet.absoluteFillObject, { resizeMode: 'cover' }]}
          />
          <Text style={[styled.location]}>{item.location}</Text>
        </View>
        <View style={styled.modal}>
          <TouchableOpacity
            onPress={() => toogleFavorite()}
            style={{
              top: -30,
              width: 70,
              height: 70,
              right: '10%',
              elevation: 2,
              shadowRadius: 2,
              borderRadius: 70,
              shadowOpacity: 0.2,
              shadowColor: '#000',
              alignItems: 'center',
              position: 'absolute',
              backgroundColor: '#FFF',
              justifyContent: 'center',
              shadowOffset: { width: 0, height: 1 },
            }}>
            <IconAnt name={favorite ? 'star' : 'staro'} size={34} color="#3767EE" />
          </TouchableOpacity>
          <Text style={styled.description}>{item.description}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 18 }}>
            <Text style={{ color: '#898b8f', fontSize: 16, marginRight: 5 }}>Available:</Text>
            <Text style={styled.available}>{item.available}</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#898b8f', fontSize: 16, marginRight: 5 }}>Duration:</Text>
              <Text style={styled.available}>{item.duration} hours</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
              <Text style={{ color: '#898b8f', fontSize: 16, marginRight: 5 }}>Price:</Text>
              <Text style={styled.available}>{item.price} $</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <View style={{ width: '70%' }}>
              <Slider
                value={number}
                trackStyle={styled.track}
                thumbStyle={styled.thumb}
                onValueChange={(value) => setNumber(value)}
                minimumTrackTintColor="#3867EF"
              />
            </View>
            <Text style={{ color: '#898b8f', fontSize: 16 }}>{persons} Persons</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Total: 60$
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#3767EE',
                width: '45%',
                height: 80,
                borderRadius: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styled.btnText}>Book now</Text>
            </TouchableOpacity>
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
