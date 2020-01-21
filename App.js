import React, {useState} from 'react';
import Moment from 'react-moment';
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Head from './components/head';
import TodoItem from './components/todoitem';
import AddTodoItem from './components/addtodoitem';
import Sandbox from './components/sandbox';


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
    const submitHandler = (text) => {
        if(text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos,
                ];
            });
        } else {
            Alert.alert('Oops!', 'Enter Word That Have A Sens', [
                {text: 'OK', onpress: () => console.log('Closed')}
            ]);
        }
    }
    
    return (
        // <Sandbox></Sandbox>
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            // console.log('Dismiss');
        }}>
        <View style={styles.container}>
            <Head />
            <View style={styles.content}>
                <AddTodoItem submitHandler={submitHandler} /> 
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
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    content: {
        flex: 1,
        padding: 20,
    }
});
