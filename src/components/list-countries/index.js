import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import data from '@utils/location';
import { tuturial2Specc, SPACING } from '@utils/dimentions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AirbnbRating } from 'react-native-ratings';

const { ITEM_WIDTH, RADIUS, FULL_SIZE } = tuturial2Specc;

const styled = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: '90%',
    margin: SPACING,
  },
  location: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: '800',
    width: ITEM_WIDTH * 0.8,
    textTransform: 'uppercase',
    position: 'absolute',
    bottom: 60,
    left: 20,
  },
  rating: {
    position: 'absolute',
    bottom: 105,
    left: 20,
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
    fontWeight: '800',
    color: '#FFF',
    fontSize: 18,
  },
  textDays: {
    fontSize: 10,
    color: '#FFF',
  },
});

function ListCountries({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
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

        const translateX = scrollX.interpolate({
          inputRange,
          outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
        });

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [1, 1.1, 1],
        });

        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailCountry', { item });
            }}
            style={styled.itemContainer}>
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
            <TouchableOpacity style={styled.daysContainer}>
              <Icon name="favorite" size={25} style={{ color: '#3767EE' }} />
            </TouchableOpacity>
            <Animated.View style={[styled.rating, { transform: [{ translateX }] }]}>
              <AirbnbRating count={5} showRating={false} defaultRating={item.rating} size={22} />
            </Animated.View>
            <Animated.Text style={[styled.location, { transform: [{ translateX }] }]}>
              {item.location}
            </Animated.Text>
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
