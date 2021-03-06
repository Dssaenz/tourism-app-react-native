/* eslint-disable no-var */
import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, FavoriteScreen, SettingScreen, SearchScreen, DetailCountry } from '@screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '@components';

const HomeStack = createStackNavigator();

var tabBarVisible = true;

function HomeStackScreens({ navigation, route }) {
  if (route.state && route.state.index > 0) {
    tabBarVisible = false;
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
    tabBarVisible = true;
  }
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="DetailCountry" component={DetailCountry} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreens() {
  return (
    <SearchStack.Navigator options={{ headerShown: false }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

const FavoriteStack = createStackNavigator();

function FavoriteStackScreens({ navigation, route }) {
  if (route.state && route.state.index > 0) {
    tabBarVisible = false;
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
    tabBarVisible = true;
  }
  return (
    <FavoriteStack.Navigator screenOptions={{ headerShown: false }}>
      <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} />
      <HomeStack.Screen name="DetailCountry" component={DetailCountry} />
    </FavoriteStack.Navigator>
  );
}

const SettingStack = createStackNavigator();

function SettingStackScreens() {
  return (
    <SettingStack.Navigator options={{ headerShown: false }}>
      <SettingStack.Screen name="Setting" component={SettingScreen} />
    </SettingStack.Navigator>
  );
}

function Navigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        tabBar={(props) =>
          tabBarVisible ? (
            <TabBar
              state={props.state}
              descriptors={props.descriptors}
              navigation={props.navigation}
            />
          ) : null
        }>
        <Tab.Screen name="home" component={HomeStackScreens} />
        <Tab.Screen name="search1" component={SearchStackScreens} />
        <Tab.Screen name="staro" component={FavoriteStackScreens} />
        <Tab.Screen name="setting" component={SettingStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

HomeStackScreens.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

FavoriteStackScreens.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Navigation;
