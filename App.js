import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook'; 
import * as Google from 'expo-google-app-auth';

// import Expo from 'expo';

import firebase from 'firebase';
try {
firebase.initializeApp({
    apiKey: "AIzaSyBatJFU1j__Q86l95KLlgKXRjubTLj9bHI",
    authDomain: "react-app-bfdba.firebaseapp.com",
    databaseURL: "https://react-app-bfdba.firebaseio.com",
    projectId: "react-app-bfdba",
    storageBucket: "react-app-bfdba.appspot.com",
    messagingSenderId: "873551684149",
    appId: "1:873551684149:web:d847220c7f9dd2a5abc77c"
})
} catch (err) {
// we skip the “already exists” message which is
// not an actual error when we’re hot-reloading
if (!/already exists/.test(err.message)) {
console.error('Firebase initialization error raised', err.stack)
}}
const firebaseApp= firebase;

import { Container, Content, Header, Form, Input, Button, Label, Item } from 'native-base';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        isReady: false,
    };
  }

  signUpUser = (email, password ) => {
    try {
        if(this.state.password.length<6) 
        {
            alert('Please The Password must be at least 6 characers')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email,password)
    } catch (error) {
        console.log(error.toString())
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

    firebase.auth().onAuthStateChanged( (user)=>{
      if (user != null){
        console.log(user)
      }
    })
  }

  loginUser = (email, password) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
            console.log(user)
        })
    } catch (error) {
        console.log(error.toString())
    }
  }

  // async loginWithFacebook() {
  //   const {type, token} = await Facebook.logInWithReadPermissionsAsync('880316815759116', {permissions:['public_profile', 'email'] })
  //   if (type === 'success') {
  //     const credentail = firebase.auth.FacebookAuthProvider.credential(token)
  //     firebase.auth().signInWithCredential(credentail).catch((error)=>{
  //       console.log(error);
  //     })
  //   }
  // }

  logInWithFacebook = async () => {
    try {
      await Facebook.initializeAsync('880316815759116');
        const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const credentail = firebase.auth.FacebookAuthProvider.credential(token);
          firebase.auth().signInWithCredential(credentail).catch((error)=>{ console.log(error)});
          Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
          // type === 'cancel'
        }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '151282758538-tr7o5e22vm2cdifu08fcutlmcv7s3635.apps.googleusercontent.com',
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
          const credentail = firebase.auth.signInWithGoogleAsync.credential(result.accessToken);
          firebase.auth().signInWithCredential(credentail).catch((error)=>{ console.log(error)});
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  // signinFacebook = async () => {
  //   try {
  //     const {
  //       type,
  //       token,
  //     } = await Facebook.logInWithReadPermissionsAsync(
  //       '880316815759116',
  //       {
  //         permissions: ['public_profile', 'email'],
  //       },
  //     );

  //     if (type === 'success') {
  //       const credential = firebase.auth.FacebookAuthProvider.credential(token);
  //       return firebase.auth().signInWithCredential(credential).catch((error) => {
  //         throw error;
  //       });
  //     }
  //   } catch (error) {
  //     // ERROR
  //   }
  // }



  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={styles.container}>
        <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(email)=>this.setState({email})}
                />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(password)=>this.setState({password})}
                />
            </Item>
            <Button full rounded success style={{ marginTop:30 }} onPress={()=>this.loginUser(this.state.email, this.state.password)}>
                <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>Login</Text>
            </Button>

            <Button full rounded primary style={{ marginTop:10 }} onPress={()=>this.signUpUser(this.state.email, this.state.password)}>
                <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>Sign up</Text>
            </Button>

            <Button full rounded primary style={{ marginTop:10 }} onPress={() => this.logInWithFacebook()}>
                <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>Login With Facebook</Text>
            </Button>

            <Button full rounded danger style={{ marginTop:10 }} onPress={() => this.signInWithGoogleAsync() ()}>
                <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>Login With Google</Text>
            </Button>

        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20
    }
})