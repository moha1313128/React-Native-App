import React from 'react';
import { Text, View, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('Details');
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home</Text>
      <Button title="go to details" onPress={pressHandler} />
    </View>
  );
}
