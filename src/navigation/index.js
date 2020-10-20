import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailScreen, FavoriteScreen, SettingScreen, SearchScreen } from '@screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeStack = createStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreens() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

const FavoriteStack = createStackNavigator();

function FavoriteStackScreens() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} />
    </FavoriteStack.Navigator>
  );
}

const SettingStack = createStackNavigator();

function SettingStackScreens() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={SettingScreen} />
    </SettingStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreens} />
        <Tab.Screen name="Search" component={SearchStackScreens} />
        <Tab.Screen name="Favorite" component={FavoriteStackScreens} />
        <Tab.Screen name="Setting" component={SettingStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
