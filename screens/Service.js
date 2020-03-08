import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});


class Service extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Service </Text>
            </View>
        )
    }
}

export default Service;



