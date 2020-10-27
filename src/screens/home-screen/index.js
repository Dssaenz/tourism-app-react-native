import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const listTab = [
  {
    id: 1,
    title: 'Sights',
  },
  {
    id: 2,
    title: 'Tours',
  },
  {
    id: 3,
    title: 'Adventures',
  },
];

const styles = StyleSheet.create({
  constainer: {
    width: '60%',
    flexDirection: 'row',
    marginLeft: 15,
    justifyContent: 'space-between',
    height: 120,
  },
  btntab: {
    padding: 10,
    alignItems: 'center',
  },
  btnTabActive: {
    backgroundColor: '#ff0000',
  },
  title: {
    color: '#000',
    marginBottom: 4,
  },
  titleActive: {
    color: '#3767EE',
  },
  pointer: {
    display: 'none',
  },
  pointActive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#3767EE',
  },
});

const Tab1 = () => <Text>Hola</Text>;
const Tab2 = () => <Text>Que</Text>;
const Tab3 = () => <Text>Hace</Text>;

function HomeScreen() {
  const [status, setStatus] = useState('Sights');

  const setStatusFilter = (title) => {
    setStatus(title);
  };
  return (
    <SafeAreaView>
      <View style={{ wdth: '100%', height: '100%', backgroundColor: '#EBF1FF' }}>
        <View style={styles.constainer}>
          {listTab.map((list) => (
            <TouchableOpacity
              key={list.id}
              style={styles.btntab}
              onPress={() => setStatusFilter(list.title)}>
              <Text style={[styles.title, status === list.title && styles.titleActive]}>
                {list.title}
              </Text>
              <View style={[styles.point, status === list.title && styles.pointActive]} />
            </TouchableOpacity>
          ))}
        </View>
        {status === 'Sights' && <Tab1 />}
        {status === 'Tours' && <Tab2 />}
        {status === 'Adventures' && <Tab3 />}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
