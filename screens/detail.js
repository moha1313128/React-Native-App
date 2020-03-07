import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import CustomStarExample from '../shared/rate';
import ReviewModal from '../shared/rating';

export default function Detail({ navigation }) {
  // const rating = navigation.getParam('rating');  
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{ navigation.getParam('title') }</Text>
        <Text>{ navigation.getParam('body') }</Text>
        <ReviewModal />
      </Card>
    </View>
  );
}