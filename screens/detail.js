import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Detail({ navigation }) {
  const pressHandler = () => {
    // navigation.goBack();
    // navigation.push('Home');
    navigation.popToTop();
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Detail</Text>
      <Button title="back to home" onPress={pressHandler}/>
    </View>
  );
}