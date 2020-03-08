import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displaName: ""
    }
    componentDidMount(){
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({ email, displayName });
    }
    signOutUser = () => {
        firebase.auth().signOut();
    }
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <Text>{this.state.displaName}</Text>
                <Text>{this.state.email}</Text>
                <TouchableOpacity style={styles.button} onPress={this.signOutUser}> 
                    <Text style={{color: '#fff'}}>خروج</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100
    }
});