import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class PostScreen extends Component {
    render() {
        return (
            <View style={styles.conatiner}>
                <Text> Post Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})