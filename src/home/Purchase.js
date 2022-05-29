import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

const Purchase = route => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <View style={styles.container}>
          <Text style={styles.itemDescription}>
            {route.route.params.paramKey.description}
          </Text>
          <Text style={styles.itemTitle}>
            $ {route.route.params.paramKey.price}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },

  topContainer: {
    height: 150,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
  itemDiscription: {
    flex: 3,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  itemDescription: {
    fontSize: 20,
    padding: 5,
  },
});
