import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ProductsScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Details Screen</Text>
        </View>
    );
}
  
const Stack = createStackNavigator();

export default ProductsScreen;