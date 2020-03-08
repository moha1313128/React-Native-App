import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});


class Chat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Chat </Text>
            </View>
        )
    }
}

export default Chat;



