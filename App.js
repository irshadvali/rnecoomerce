import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View, Image} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import AuthScreen from './src/auth/AuthScreen';

const App = () => {
  const [value, setValue] = useState(false);

  return (
    <Provider store={store}>
      <View style= {{flex:1}}>
        <AuthScreen />
        <View style={styles.bottom}>
          <View style={styles.bottomView}>
            <Image
              source={require('./asests/home.png')}
              style={{width: 30, height: 30}}
            />
          </View>
          <View style={styles.bottomView}>
            <Image
              source={require('./asests/cat.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          </View>
          <View style={styles.bottomView}>
            <Image
              source={require('./asests/fav.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          </View>
          <View style={styles.bottomView}>
            <Image
              source={require('./asests/pro.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          </View>
        </View>
      </View>
    </Provider>
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

export default App;
