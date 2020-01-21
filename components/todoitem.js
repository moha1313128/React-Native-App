import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';


export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={20} color='red'/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        textAlign: 'center',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    itemText: {
        marginLeft: 40,
    }
    
})

