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
    color: '#000',
    textAlign: 'center',
  },
});

function SettingScreen() {
  return (
    <View style={styles.constainer}>
      <Text style={styles.text}>this is setting bitch!</Text>
    </View>
  );
}

export default SettingScreen;
