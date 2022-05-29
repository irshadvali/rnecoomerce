import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import HomeScreen from '../home/HomePage';
import Purchase from '../home/Purchase';
// login flow

// Home use only in authenticated screens
const Home = createNativeStackNavigator();
const HomeStack = () => (
  <Home.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Home.Screen name="HomePage" component={HomeScreen} />
    <Home.Screen name="Purchase" component={Purchase} />
  </Home.Navigator>
);
const RootStack = createNativeStackNavigator();
const AuthScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bottom: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#d0d0d0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
});

export default AuthScreen;
