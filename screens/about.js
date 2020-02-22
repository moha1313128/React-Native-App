// import React from 'react';
// import { Text, View } from 'react-native';
// import { globalStyles } from '../styles/global';

// export default function About() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>About</Text>
//     </View>
//   );
// }

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';

function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home Screen</Text>
    </View>
  );
}
const AboutStack = createStackNavigator();

export default AboutStack;