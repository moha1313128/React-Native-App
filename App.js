import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'moha1', key: '1' },
    { name: 'moha2', key: '2' },
    { name: 'moha3', key: '3' },
    { name: 'moha4', key: '4' },
    { name: 'moha5', key: '5' },
    { name: 'moha6', key: '6' },
    { name: 'moha7', key: '7' },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'whitesmoke',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  }
});
