import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

const GridItem = props => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          props?.onClick();
        }}>
        <Image
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'cover',
          }}
          source={{
            uri: props.item.image,
          }}
        />
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            alignSelf: 'flex-end',
            marginTop: -20,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../asests/vector.png')}
            style={{width: 18, height: 18}}
          />
        </View>
        <Text
          style={styles.descriptionText}
          numberOfLines={2}
          ellipsizeMode="tail">
          {props.item.description}
        </Text>
        <Text style={styles.title}> $ {props.item.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 4,
  },
  item: {
    padding: 2,
    width: '45%',
    height: 275,
    margin: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  descriptionText: {
    marginTop: 5,
    paddingRight: 10,
    fontSize: 15,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696969',
    height: 50,
    width: '100%',
    borderColor: '#191970',
    borderWidth: 2,
    borderRadius: 5,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  descriptionView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
