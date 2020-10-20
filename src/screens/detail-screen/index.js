import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
      <Text style={styles.text}>this is detail screen</Text>
    </View>
  );
}

export default DetailScreen;
