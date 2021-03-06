import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListCountries, CardPlace } from '@components';
import { ScrollView } from 'react-native-gesture-handler';
import data from '../../utils/places';

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
    height: 50,
  },
  btntab: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    color: '#000',
    marginBottom: 4,
  },
  titleActive: {
    color: '#3767EE',
    fontWeight: 'bold',
  },
  pointer: {
    display: 'none',
  },
  pointActive: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: '#3767EE',
  },
  titleSection: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: '6%',
    marginVertical: '4%',
  },
  subtitle: {
    color: '#000',
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

function HomeScreen({ navigation }) {
  const [status, setStatus] = useState('Sights');

  const setStatusFilter = (title) => {
    setStatus(title);
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#F6F7FD' }}>
      <StatusBar backgroundColor="#f0f2fc" barStyle="dark-content" />
      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: '#F6F7FD' }}>
        <Text style={styles.titleSection}>Explore</Text>
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
        {status === 'Sights' && <ListCountries navigation={navigation} />}
        {status === 'Tours' && <ListCountries navigation={navigation} />}
        {status === 'Adventures' && <ListCountries navigation={navigation} />}
        <View style={{ marginHorizontal: 18 }}>
          <Text style={styles.subtitle}>Popular</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={(item) => {
              const { item: dataPlace } = item;
              return (
                <CardPlace
                  placeImage={dataPlace.image}
                  place={dataPlace.name}
                  date={dataPlace.date}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
