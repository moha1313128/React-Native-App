import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, StatusBar, LayoutAnimation, ImageBackground } from 'react-native'
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };
    state= {
        email: "",
        password: "",
        errorMessage: null
    };
    handleLogin = () => {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error=>this.setState({errorMessage: error.message}));
    }
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <ImageBackground source={require("../assets/header.png")} style={{width: '100%', height: '100%'}}>
                
                <Text style={styles.greeting}>{ `مرحبا بك`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>الإيميل</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none" 
                            onChangeText={email=>this.setState({email})} 
                            value={this.state.email}>
                        </TextInput>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>كلمة السر</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none" 
                            secureTextEntry
                            onChangeText={password=>this.setState({password})}
                            value={this.state.password}>
                        </TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}> 
                    <Text style={{color: '#fff'}}>الدخول</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', marginTop: 24}} onPress={()=>{this.props.navigation.navigate('Register')}}>
                    <Text style={{color: '#E9446A', fontWeight: '500', fontSize: 20}}>فتح حساب جديد</Text>
                </TouchableOpacity>

                
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }, 
    greeting: {
        marginTop: 32,
        fontSize:  18,
        fontWeight: "400",
        textAlign: 'center'
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },  
    form: {
        marginBottom: 47,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 50,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    }
});