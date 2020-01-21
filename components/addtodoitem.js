import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function AddTodoItem({ submitHandler }) {

    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    } 
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='Add todo'
            onChangeText={changeHandler}
            />
            {/* <Ionicons name='ios-add-circle' size={30} style={{height:25, width:25}} color= >
                <Text style={styles.btn} onPress={() => submitHandler(text)}>SUBMIT</Text>
            </Ionicons>     */}
            <FontAwesome.Button name="plus-circle" backgroundColor="#3b5998">
                {/* <Text style={styles.btn} onPress={() => submitHandler(text)}>SUBMIT</Text> */}
                <Button onPress={() => submitHandler(text)} title='Submit' color='#3b5998' />
            </FontAwesome.Button>
            {/* <Button onPress={() => submitHandler(text)} title='Submit' color='coral' /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#3b5998'
    },
    btn: {
        color:'#fff',
        // justifyContent: 'center',
        // textAlign: 'center',
    }
})

