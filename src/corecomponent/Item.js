import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Item = props => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.book.API}</Text>
      <View style={styles.descriptionView}>
        <Text
          style={styles.descriptionText}
          numberOfLines={3}
          ellipsizeMode="tail">
          {props.book.Description}
        </Text>
        <TouchableOpacity
          disabled={props.book.isPurchased}
          style={styles.buttonStyle}
          onPress={() => {
            props?.onClick();
          }}>
          <Text
            style={[
              styles.buttonText,
              {fontSize: props.book.isPurchased && 8},
            ]}>
            {props.book.isPurchased ? 'Purchased' : 'Buy'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 10,
    borderColor: '#191970',
    borderWidth: 2,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionText: {
    flex: 4,
    paddingRight: 10,
    fontSize: 20,
  },
  buttonStyle: {
    backgroundColor: '#696969',
    flex: 1,
    alignItems: 'center',
    height: 50,
    alignSelf: 'flex-end',
    borderColor: '#191970',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    padding: 10,
    color: '#ffffff',
  },
  descriptionView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
