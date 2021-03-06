import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import data from '@utils/location';
import { tuturial2Specc, SPACING } from '@utils/dimentions';
import { AirbnbRating } from 'react-native-ratings';

const { ITEM_WIDTH, RADIUS, FULL_SIZE } = tuturial2Specc;

const styled = StyleSheet.create({
  listCountries: {
    width: '100%',
    height: 350,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: '90%',
    margin: SPACING,
  },
  location: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  rating: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 10,
    paddingLeft: 15,
  },
  box: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex: 10,
  },
  daysContainer: {
    position: 'absolute',
    top: SPACING,
    right: SPACING,
    width: 54,
    height: 54,
    borderRadius: 26,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  days: {
    fontWeight: 'bold',
    color: '#3767EE',
    fontSize: 18,
  },
  textDays: {
    fontSize: 10,
    color: '#3767EE',
    marginTop: -5,
  },
});

function ListCountries({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      style={styled.listCountries}
      data={data}
      keyExtractor={(item) => item.key}
      horizontal
      snapToInterval={FULL_SIZE}
      decelerationRate={1.5}
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: true,
      })}
      renderItem={({ item, index }) => {
        const inputRange = [(index - 1) * FULL_SIZE, index * FULL_SIZE, (index + 1) * FULL_SIZE];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [1, 1.2, 1],
        });

        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailCountry', { item });
            }}
            style={styled.itemContainer}
            activeOpacity={2}>
            <View
              style={[StyleSheet.absoluteFillObject, { overflow: 'hidden', borderRadius: RADIUS }]}>
              <Animated.Image
                source={{ uri: item.image }}
                style={[
                  StyleSheet.absoluteFillObject,
                  { resizeMode: 'cover', transform: [{ scale }] },
                ]}
              />
            </View>
            <View style={styled.daysContainer}>
              <Text style={styled.days}>{item.numberOfDays}</Text>
              <Text style={styled.textDays}>Days</Text>
            </View>
            <View style={styled.box} />
            <View style={styled.rating}>
              <View>
                <AirbnbRating count={5} showRating={false} defaultRating={item.rating} size={18} />
              </View>
              <Text style={styled.location}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

ListCountries.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ListCountries;
