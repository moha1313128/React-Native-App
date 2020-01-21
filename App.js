import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Head from './components/head';
import TodoItem from './components/todoitem';
// import AddTodoItem from './components/addtodoitem';


export default function App() {
    const [todos, setTodos] = useState([
        { text: 'Buy Coffee', key: '1'},
        { text: 'Create an App', key: '2'},
        { text: 'Paly a game', key: '3'}
    ]);
    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        });
    }
    // const submitHandler = (text) => {
    //     setTodos((prevTodos) => {
    //         return [
    //             { text: text, key: Math.random().toString() },
    //             ...prevTodos
    //         ]
    //     });
    // }

    return (
        <View style={styles.container}>
            <Head />
            <View style={styles.content}>
                {/* <AddTodoItem submitHandler={submitHandler} />  */}
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={( {item}) => ( 
                        <TodoItem item={item} pressHandler={pressHandler} />
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
        backgroundColor: '#fff'
    },
    list: {
        marginTop: 20
    },
    content: {
        padding: 20
    }
});
