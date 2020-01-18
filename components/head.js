import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Head() {

  return (
    <View style={styles.head}>
        <Text style={styles.title}>My List</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  head: {
    marginTop:80,
      height: 80,
      width:1000,
      padding: 38,
      backgroundColor: 'coral'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  }
});