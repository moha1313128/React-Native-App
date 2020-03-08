import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class NotificationScreen extends Component {
    render() {
        return (
            <View style={styles.conatiner}>
                <Text> NotificationScreen </Text>
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
