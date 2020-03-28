import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput, Keyboard } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default class TodoModal extends Component {
    state = {
        newTodo: ""
    };
    toggleTodoCompleted = index => {
        let list = this.props.list
        list.todos[index].completed = !list.todos[index].completed

        this.props.updateList(list);
    };
    renderTodo = (todo, index) => {
        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
                    <Ionicons name={todo.completed ? "ios-square" : "ios-square-outline"} size={24} color="#A4A4A4" style={{ width: 32 }} />
                </TouchableOpacity>
                <Text style={styles.todo, { color: todo.completed ? "#A4A4A4" : "#2D3436", textDecorationLine: todo.comleted ? 'line-through' : 'none' }}>
                    {todo.title}
                </Text>
            </View>
        )
    };
    addTodo = () => {
        let list = this.props.list
        list.todos.push({ title: this.state.newTodo, completed: false })
        this.props.updateList(list)
        this.setState({ newTodo: "" });

    };
    render() {
        const list = this.props.list
        const taskCount = list.todos.length;
        const completedCount = list.todos.filter(todo => todo.completed).length;
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity style={{ position: 'absolute', top: 64, right: 32, zIndex: 10 }} onPress={this.closeModal}>
                        <AntDesign name="close" color="#2D3436" size={24} />
                    </TouchableOpacity>
                    <View style={[styles.section, styles.header, { borderBottomColor: list.color }]}>
                        <Text style={styles.title}>
                            {list.name}
                        </Text>
                        <Text style={styles.taskCount}>
                            {completedCount} of {taskCount} tasks
                    </Text>
                    </View>
                    <View style={[styles.section, { flex: 3 }]}>
                        <FlatList
                            data={list.todos}
                            renderItem={({ item, index }) => this.renderTodo(item, index)}
                            keyExtractor={item => item.title}
                            contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    <View style={[styles.section, styles.footer]}>
                        <TextInput style={[styles.input, { borderColor: list.color }]} onChangeText={text => this.setState({ newTodo: text })} value={this.state.newTodo} />
                        <TouchableOpacity style={[styles.addTodo, { backgroundColor: list.color }]} onPress={() => this.addTodo()} >
                            <AntDesign name="plus" size={16} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    section: {
        flex: 1,
        alignSelf: 'stretch'
    },
    header: {
        justifyContent: 'flex-end',
        marginLeft: 64,
        borderBottomWidth: 3
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        color: "#2D3436",
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: "#A4A4A4",
        fontWeight: "600"
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 8
    },
    addTodo: {
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    todoContainer: {
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    todo: {
        color: "#2D3436",
        fontWeight: "700",
        fontSize: 16
    }
})
