import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
// import CustomStarExample from '../shared/rate';
// import StarRate from '../shared/rating';

export default function Detail({ navigation }) {
  // const rating = navigation.getParam('rating');  
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{ navigation.getParam('title') }</Text>
        <Text>{ navigation.getParam('body') }</Text>
      </Card>
    </View>
  );
}