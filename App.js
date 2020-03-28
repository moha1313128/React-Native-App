import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors"
import tempData from './Data';
import TodoList from './components/TodoList';
import AddListModal from './components/AddListModal'

export default class App extends React.Component {
  state = {
    addTodoVisible: false,
    lists: tempData
  }
  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }
  renderList = list => {
    return <TodoList list={list} updateList={this.updateList} />
  }
  addList = list => {
    this.setState({ lists: [...this.state.lists, { ...list, id: this.state.lists.length + 1, todos: [] }] });
  };
  updateList = list => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item;
      })
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal animationType="slide" visible={this.state.addTodoVisible} onRequestClose={() => this.toggleAddTodoModal()}>
          <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList} />
        </Modal>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>Todo <Text style={{ fontWeight: "300", color: "#24A6D9" }}>Lists</Text></Text>
          <View style={styles.divider} />
        </View>

        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={16} color="#24A6D9" />
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={this.state.lists}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
            keyboardShouldPersistTaps="always"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  divider: {
    backgroundColor: "#A7CBD9",
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#2D3436",
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: "#24A6D9",
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: "#24A6D9",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8
  }
});