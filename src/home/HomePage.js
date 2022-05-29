import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import GridItem from '../corecomponent/GridItem';
import Item from '../corecomponent/Item';
import {homePageActions} from '../action/homepage.action';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../corecomponent/Loader';

const ITEM = ['All','electronics', 'jewelery', "men's clothing", "women's clothing"];

const HomePage = ({navigation}) => {
  const allDataResult = useSelector(state => state.homepage);
  const dispatch = useDispatch();
  const allCat = allDataResult.cat;
  useEffect(() => {
    console.log('===============in use effect');
    dispatch(homePageActions.getCat());
    dispatch(homePageActions.getAllData('All'));
  }, []);

  const purchageItem = item => {
    navigation.navigate('Purchase', {paramKey: item});
  };
  const renderGridItem = ({item}) => (
    <GridItem
      item={item}
      onClick={() => {
        purchageItem(item);
      }}
    />
  );
  const ItemRender = ({name}) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );

  console.log('===========allDataResult=========', allDataResult);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={allCat ? allCat : ITEM}
          renderItem={({item}) => <ItemRender name={item} />}
          horizontal={true}
        />
        {allDataResult?.allDataLoading ? (
          <Loader visible={allDataResult?.allDataLoading} text="Data Loading" />
        ) : (
          <FlatList
            numColumns={2}
            key={2}
            data={allDataResult?.allData}
            renderItem={renderGridItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{paddingBottom: 160, marginTop: 20}}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 4,
  },

  header: {
    height: 110,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 8,
    backgroundColor: '#d0d0d0',
    width: 120,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 25,
  },

  itemText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
