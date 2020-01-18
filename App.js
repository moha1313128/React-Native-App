import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] =  useState('Mohammed');
  const [age, setAge] = useState('40');
  // const clickHandler = () => {
    // setName('chun-li');
    // setPerson({name: 'Cobras', age: 90});
  // }

  return (
    <View style={styles.container}>
      <Text>Entre your name:</Text>
      <TextInput style={styles.input}
        multiline
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)} />

      <Text>Entre your age:</Text>
      <TextInput style={styles.input}
        placeholder='e.g. 90'
        keyboardType='numeric'
        onChangeText={(val) => setAge(val)} />

      <Text>My name is {name} and my age is {age}</Text>
      {/* <Text>His name is {person.name} and his age is {person.age}</Text> */}
      {/* <View style={styles.btnConatiner}> */}
        {/* <Button title='update state' onPress={clickHandler} /> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  btnContauner: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 18,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
