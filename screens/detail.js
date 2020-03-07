import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function Detail({ navigation }) {

  const rating = navigation.getParam('rating');
 
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{ navigation.getParam('title') }</Text>
        <Text>{ navigation.getParam('body') }</Text>
        <View style={styles.rating}>
          <Text>Rate: </Text>
          <Image 
            style={{ width: 20, height: 20}}
            source={images.ratings[rating]}>
          </Image>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {

  }
});