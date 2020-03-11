import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList, ListView } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import tempData from './tempData'
import TodoList from './components/TodoList'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
            <Text style={styles.title}>
              Todo <Text style={{fontWeight: "300", color: "#24A6D9"}}>Lists</Text>
            </Text>
            <View style={styles.divider} />
        </View>

        <View style={{marginVertical: 48}}>
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={16} color="#24A6D9"></AntDesign>
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{height: 275, paddingLeft: 32}}>
        <FlatList 
            data={tempData} 
            keyExtractor={item => item.name} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            renderItem={({item}) => <TodoList list={item} />}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: "#A7CBD9",
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "#2D3436",
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: "#A7CBD9",
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    color: "#24A6D9",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8
  }
})
