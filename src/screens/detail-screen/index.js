import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

function DetailScreen() {
  return (
    <View style={styles.constainer}>
      <TouchableOpacity>
        <Text style={styles.text}>this is detail bitch!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DetailScreen;
