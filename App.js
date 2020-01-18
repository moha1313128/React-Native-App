import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'moha1', id: '1' },
    { name: 'moha2', id: '2' },
    { name: 'moha3', id: '3' },
    { name: 'moha4', id: '4' },
    { name: 'moha5', id: '5' },
    { name: 'moha6', id: '6' },
    { name: 'moha7', id: '7' },
    { name: 'moha8', id: '8' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList 
      numColumns={2}
      keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

      {/* <ScrollView>
        { people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
        ))}
      </ScrollView> */}
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
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 24,
    borderRadius: 50,
    marginHorizontal: 10,
    marginTop:24
  }
});
