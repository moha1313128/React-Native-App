import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Head from './components/head';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'create app', key: '2'},
    { text: 'watch movie', key: '3'},
  ]);


  return (
    <View style={styles.container}>
      {/* Head */}
      <Head />
      <View style={styles.content}>
        {/* Form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 20,
    // paddingTop: 40
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop:20
  }
});
