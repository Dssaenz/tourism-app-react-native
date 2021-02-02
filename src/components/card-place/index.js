import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

function CardPlace({ placeImage, place, date }) {
  return (
    <View
      style={{
        width: '98%',
        borderRadius: 16,
        elevation: 3,
        padding: 12,
        backgroundColor: '#FFF',
        marginVertical: 10,
        marginHorizontal: '1%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image source={{ uri: placeImage }} style={{ width: 70, height: 60, borderRadius: 10 }} />
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, marginBottom: 4 }}>{place}</Text>
        <Text style={{ color: '#898b8f' }}>{date}</Text>
      </View>
    </View>
  );
}

CardPlace.propTypes = {
  placeImage: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CardPlace;
